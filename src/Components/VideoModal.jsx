import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize, Minimize } from 'lucide-react';

const VideoModal = ({ project, onClose }) => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const syncFullscreenState = useCallback(() => {
    setIsFullscreen(Boolean(document.fullscreenElement));
  }, []);

  useEffect(() => {
    document.addEventListener('fullscreenchange', syncFullscreenState);
    return () => document.removeEventListener('fullscreenchange', syncFullscreenState);
  }, [syncFullscreenState]);

  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && !document.fullscreenElement) onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [project, onClose]);

  const toggleFullscreen = async () => {
    const target = videoContainerRef.current || videoRef.current;
    if (!target) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (target.requestFullscreen) {
        await target.requestFullscreen();
      } else if (videoRef.current?.webkitEnterFullscreen) {
        videoRef.current.webkitEnterFullscreen();
      }
    } catch {
      /* fullscreen not supported or denied */
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[2000] flex flex-col bg-black/50 dark:bg-black/70 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label={`Playing ${project.title}`}
      >
        {/* Top half — tap to close */}
        <button
          type="button"
          className="flex-1 min-h-[50vh] w-full cursor-default focus:outline-none"
          onClick={onClose}
          aria-label="Close video player"
        />

        {/* Bottom half — video player */}
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative flex flex-col h-[50vh] min-h-[280px] max-h-[50vh] w-full bg-slate-900 border-t border-primary-500/30 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 shrink-0 bg-slate-900/95 border-b border-slate-700/80">
            <h2 className="text-sm sm:text-base font-semibold text-white truncate pr-2">
              {project.title}
            </h2>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                aria-label={isFullscreen ? 'Exit full screen' : 'Enter full screen'}
              >
                {isFullscreen ? (
                  <>
                    <Minimize className="w-4 h-4" />
                    <span className="hidden sm:inline">Exit full screen</span>
                  </>
                ) : (
                  <>
                    <Maximize className="w-4 h-4" />
                    <span className="hidden sm:inline">Full screen</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-full bg-slate-800 hover:bg-primary-500/80 text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={videoContainerRef}
            className="flex-1 min-h-0 bg-black flex items-center justify-center"
          >
            <video
              ref={videoRef}
              src={project.videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full max-h-full object-contain"
            >
              <track kind="captions" />
            </video>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
