import { useCallback, useState } from 'react';
import { FaClock } from 'react-icons/fa';
import VideoModal from '../VideoModal';
import VideoCardMedia from './VideoCardMedia';
import {
  VIDEO_PROJECTS,
  STATUS_LABELS,
  formatLastEdited,
  formatVideoDuration,
  getToolName,
} from '../../data/videoProjects';

const CATEGORY_LABEL = 'Video Editing';

const buildInitialDurations = () =>
  Object.fromEntries(
    VIDEO_PROJECTS.filter((p) => p.durationSeconds).map((p) => [
      p.id,
      formatVideoDuration(p.durationSeconds),
    ])
  );

const VideoEditingWorkspace = () => {
  const [previewProject, setPreviewProject] = useState(null);
  const [durations, setDurations] = useState(buildInitialDurations);

  const handleDurationLoaded = useCallback((projectId, seconds) => {
    const project = VIDEO_PROJECTS.find((p) => p.id === projectId);
    if (project?.durationSeconds) return;

    const formatted = formatVideoDuration(seconds);
    if (!formatted) return;

    setDurations((prev) =>
      prev[projectId] ? prev : { ...prev, [projectId]: formatted }
    );
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {VIDEO_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white/90 dark:bg-dark-800/90 backdrop-blur-2xl rounded-3xl shadow-premium hover:shadow-premium-lg border border-gray-200/60 dark:border-gray-700/60 flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] focus-within:ring-2 focus-within:ring-primary-400 outline-none"
            style={{ minHeight: '450px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl pointer-events-none" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="relative">
                <VideoCardMedia
                  project={project}
                  onPlay={() => setPreviewProject(project)}
                  onDurationLoaded={(seconds) =>
                    handleDurationLoaded(project.id, seconds)
                  }
                />

                <span className="absolute top-4 left-4 z-10 px-4 py-2 rounded-xl font-semibold text-xs tracking-wide backdrop-blur-xl bg-white/90 dark:bg-dark-800/90 text-gray-800 dark:text-gray-200 border border-gray-200/50 dark:border-gray-700/50 shadow-lg pointer-events-none">
                  {CATEGORY_LABEL}
                </span>

                <span className="absolute top-4 right-4 z-10 px-4 py-2 rounded-xl font-semibold text-xs tracking-wide backdrop-blur-xl bg-primary-500/90 text-white border border-primary-400/50 shadow-lg flex items-center gap-1.5 pointer-events-none">
                  <FaClock className="w-3 h-3" />
                  {durations[project.id] ?? '…'}
                </span>
              </div>

              <div className="flex-1 flex flex-col p-6 gap-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 dark:group-hover:from-primary-400 dark:group-hover:to-accent-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1">
                  {project.description}
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    {STATUS_LABELS[project.status]}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Edited {formatLastEdited(project.lastEdited)}</span>
                </p>

                {project.tool && (
                  <span className="inline-flex w-fit items-center gap-1.5 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-lg text-xs font-semibold border border-primary-200/50 dark:border-primary-700/50 shadow-sm mt-1">
                    Edited with {getToolName(project.tool)}
                  </span>
                )}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <VideoModal project={previewProject} onClose={() => setPreviewProject(null)} />
    </>
  );
};

export default VideoEditingWorkspace;
