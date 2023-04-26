import { memo, useCallback, useEffect } from 'react';

import s from './MovieModal.module.css';

const MovieModal = ({ modalData, closeModal }) => {
  const handleCloseModalByEscape = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModalByEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleCloseModalByEscape);
      document.body.style.overflow = '';
    };
  }, [handleCloseModalByEscape]);

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div className={s.backdrop} onClick={handleCloseModal}>
        <div className={s.movie}>
          <iframe
            className="iframe-container"
            width="900"
            height="600"
            src={`https://www.youtube.com/embed/${modalData}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default memo(MovieModal);
