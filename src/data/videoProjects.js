import task1Video from '../assets/img/Task 1.mp4';
import task7Video from '../assets/img/Task 7.mp4';
import task8Video from '../assets/img/Task 8.mp4';
import weatherVideo from '../assets/img/WeatherNewsSampleTask (1).mp4';

const TOOL_NAMES = {
  capcut: 'CapCut',
  premiere: 'Adobe Premiere Pro',
  davinci: 'DaVinci Resolve',
};

export const VIDEO_PROJECTS = [
  {
    id: 'led-intro-course',
    title: 'Introducing the LED Lighting Course',
    durationSeconds: 39,
    status: 'completed',
    lastEdited: '2025-05-18',
    videoSrc: task1Video,
    description:
      'Opening course video introducing LED lighting fundamentals, learning outcomes, and what students will build throughout the program.',
    tool: 'capcut',
  },
  {
    id: 'led-education-industry',
    title: "The LED Education the Industry Doesn't Want You to Have",
    durationSeconds: 48,
    status: 'completed',
    lastEdited: '2025-05-22',
    videoSrc: task7Video,
    description:
      'Educational deep-dive exposing industry gaps in LED training—bold storytelling, motion graphics, and chapter-style pacing for maximum retention.',
    tool: 'premiere',
  },
  {
    id: 'led-technology-exploding',
    title: "LED Technology Is Exploding—Don't Get Left Behind",
    status: 'in-progress',
    lastEdited: '2025-05-28',
    videoSrc: task8Video,
    description:
      'High-energy promotional edit highlighting rapid LED innovation, urgency-driven messaging, and dynamic cuts for social and course funnels.',
    tool: 'davinci',
  },
  {
    id: 'weather-news',
    title: 'Weather News',
    status: 'completed',
    lastEdited: '2025-04-12',
    videoSrc: weatherVideo,
    description:
      'News-style weather segment with lower-thirds, forecast graphics, and clean broadcast pacing for informational content.',
    tool: 'premiere',
  },
];

export const getToolName = (toolId) => TOOL_NAMES[toolId] ?? toolId;

export const STATUS_LABELS = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  draft: 'Draft',
};

export const formatVideoDuration = (totalSeconds) => {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) return null;

  const wholeSeconds = Math.round(totalSeconds);

  if (wholeSeconds < 60) {
    return `${wholeSeconds} sec`;
  }

  const hours = Math.floor(wholeSeconds / 3600);
  const minutes = Math.floor((wholeSeconds % 3600) / 60);
  const seconds = wholeSeconds % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  return `${minutes}:${String(seconds).padStart(2, '0')}`;
};

export const formatLastEdited = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};
