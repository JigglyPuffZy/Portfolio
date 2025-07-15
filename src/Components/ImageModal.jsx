import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ImageModal = ({ image, onClose, modalClassName = '' }) => {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[2000] flex items-center justify-center bg-white/40 dark:bg-slate-900/70 backdrop-blur-lg transition-all duration-300"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          className={`modal-content bg-white/70 dark:bg-slate-800/80 backdrop-blur-2xl shadow-2xl border border-blue-100 dark:border-blue-700 rounded-2xl relative overflow-hidden ${modalClassName}`}
          style={{
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxHeight: '90vh',
            maxWidth: '95vw',
            width: 'auto',
            height: 'auto',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-3 z-10 bg-slate-900/60 dark:bg-slate-800/80 hover:bg-blue-500/80 text-white rounded-full p-1 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
          <img src={image} alt="Full size" className="max-w-[90vw] max-h-[85vh] object-contain block m-auto rounded-xl shadow-xl" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal; 