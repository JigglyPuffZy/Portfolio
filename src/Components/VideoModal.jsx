import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize, Minimize } from 'lucide-react';

const VideoModal = ({ project, onClose }) => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);
  const [videoAspect, setVideoAspect] = useState(16 / 9);

  const syncFullscreenState = useCallback(() => {
    setIsFullscreen(Boolean(document.fullscreenElement));
  }, []);

  useEffect(() => {
    document.addEventListener('fullscreenchange', syncFullscreenState);
    return () => document.removeEventListener('fullscreenchange', syncFullscreenState);
  }, [syncFullscreenState]);

  useEffect(() => {
    if (!project) return undefined;

    setPlaybackError(false);
    setVideoAspect(project.aspectRatio ?? 16 / 9);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && !document.fullscreenElement) onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    let cancelled = false;

    const startPlayback = () => {
      if (cancelled) return;
      const video = videoRef.current;
      if (!video) return;

      const tryPlay = () => {
        video.play().catch(() => {
          /* user can press play on controls */
        });
      };

      if (video.readyState >= 2) {
        tryPlay();
      } else {
        video.addEventListener('canplay', tryPlay, { once: true });
      }
    };

    const frameId = requestAnimationFrame(startPlayback);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      videoRef.current?.pause();
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

  const isPortrait = videoAspect < 1;
  const playerMaxWidth = isPortrait
    ? `min(100%, calc((90vh - 3.5rem) * ${videoAspect}))`
    : 'min(100%, 56rem)';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label={`Playing ${project.title}`}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          style={{ maxWidth: playerMaxWidth }}
          className="relative flex w-full max-h-[90vh] flex-col overflow-hidden rounded-xl border border-primary-500/30 bg-slate-900 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-700/80 bg-slate-900/95 px-4 py-3">
            <h2 className="truncate pr-2 text-sm font-semibold text-white sm:text-base">
              {project.title}
            </h2>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="flex items-center gap-1.5 rounded-lg bg-primary-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                aria-label={isFullscreen ? 'Exit full screen' : 'Enter full screen'}
              >
                {isFullscreen ? (
                  <>
                    <Minimize className="h-4 w-4" />
                    <span className="hidden sm:inline">Exit full screen</span>
                  </>
                ) : (
                  <>
                    <Maximize className="h-4 w-4" />
                    <span className="hidden sm:inline">Full screen</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-slate-800 p-1.5 text-white transition hover:bg-primary-500/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={videoContainerRef}
            className="flex min-h-[min(50vh,360px)] items-center justify-center bg-black"
            style={{ aspectRatio: videoAspect }}
          >
            {playbackError ? (
              <p className="px-6 text-center text-sm text-gray-400">
                Video could not load. Add the .mp4 files to{' '}
                <code className="text-primary-400">public/videos/</code> and redeploy.
              </p>
            ) : (
              <video
                key={project.id}
                ref={videoRef}
                src={project.videoSrc}
                controls
                playsInline
                preload="auto"
                className="mx-auto block h-full w-full object-contain"
                onLoadedMetadata={(e) => {
                  const { videoWidth, videoHeight } = e.currentTarget;
                  if (videoWidth > 0 && videoHeight > 0) {
                    setVideoAspect(videoWidth / videoHeight);
                  }
                }}
                onError={() => setPlaybackError(true)}
              >
                <track kind="captions" />
              </video>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
