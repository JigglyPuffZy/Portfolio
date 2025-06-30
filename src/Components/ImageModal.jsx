import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal active"
        style={{ zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          className="modal-content"
          style={{
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--card-bg)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            maxHeight: '90vh',
            maxWidth: '95vw',
            width: 'auto',
            height: 'auto',
            position: 'relative',
            borderRadius: '1rem',
            overflow: 'hidden',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close"
            style={{ top: 8, right: 8, zIndex: 10, background: 'rgba(0,0,0,0.5)', borderRadius: '50%' }}
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
          <img src={image} alt="Full size" style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal; 