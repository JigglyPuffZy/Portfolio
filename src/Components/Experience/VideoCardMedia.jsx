import { useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const VideoCardMedia = ({ project, onPlay, onDurationLoaded }) => {
  const videoRef = useRef(null);
  const [frameReady, setFrameReady] = useState(false);

  const loadVideoFrame = () => {
    const video = videoRef.current;
    if (!video) return;

    if (Number.isFinite(video.duration) && video.duration > 0) {
      onDurationLoaded?.(video.duration);
    }

    const seekToPreview = () => {
      const target =
        Number.isFinite(video.duration) && video.duration > 0
          ? Math.min(1, video.duration * 0.08)
          : 0.5;
      video.currentTime = target;
    };

    if (video.readyState >= 1) {
      seekToPreview();
    }
  };

  return (
    <div
      className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-600 flex items-center justify-center overflow-hidden cursor-pointer group/image"
      onClick={onPlay}
      onKeyDown={(e) => e.key === 'Enter' && onPlay()}
      role="button"
      tabIndex={0}
      title="Click to play video"
    >
      <video
        ref={videoRef}
        src={project.videoSrc}
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={loadVideoFrame}
        onLoadedData={loadVideoFrame}
        onDurationChange={loadVideoFrame}
        onSeeked={() => setFrameReady(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover/image:scale-110 ${
          frameReady ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label={`${project.title} preview`}
      />

      {!frameReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-dark-700 animate-pulse" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/95 dark:bg-dark-800/95 text-primary-600 dark:text-primary-400 shadow-premium scale-100 group-hover/image:scale-110 transition-transform duration-300">
          <FaPlay className="w-5 h-5 ml-0.5" />
        </span>
      </div>
    </div>
  );
};

export default VideoCardMedia;
