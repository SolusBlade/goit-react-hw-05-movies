import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getMovieReviewapi } from '../../services/moviesApi';
import s from './MovieReview.module.css';

const MovieReview = () => {
  const [review, setReview] = useState([]);

  const location = useLocation();

  const str = location.pathname;

  const parts = str.split('/');

  const id = parts[parts.length - 2];

  useEffect(() => {
    getMovieReviewapi(id).then(r => {
      setReview(r.results);
    });
  }, [id]);

    return (
      <>
        {review.length === 0 && <h2 className={s.sectionTitle}>We don't have any reviews for this movie</h2>}
        {review.length > 0 && (
          <ul className={s.list}>
            {review.map(({ author, author_details, content, id }) => (
              <li key={id} className={s.item}>
                <img
                  src={
                    author_details.avatar_path === null ||
                    author_details.avatar_path === undefined
                      ? 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg='
                      : author_details.avatar_path.includes('/https')
                      ? author_details.avatar_path.slice(1)
                      : 'https://image.tmdb.org/t/p/original' +
                        author_details.avatar_path
                  }
                  className={s.avatar}
                  width={50}
                  height={50}
                  alt=""
                />

                <div className={s.textWrap}>
                  <h2 className={s.title}>{author}</h2>
                  <p className={s.text}>{content}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </>
    );
};

export default memo(MovieReview);
