import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
import './Swiper.css';
import simpleLightbox from 'simplelightbox';
import { useEffect} from 'react';

const SwiperComp = ({ images }) => {
  useEffect(() => {
    new simpleLightbox('.swiper-wrapper a', {
      captionDelay: 250,
    });
  }, [images]);

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={10}
      slidesPerView={10}
    >
      {images.map(({ file_path }) => (
        <SwiperSlide key={file_path}>
          <a href={'https://image.tmdb.org/t/p/original' + file_path}>
            <img
              src={
                file_path !== null
                  ? 'https://image.tmdb.org/t/p/original' + file_path
                  : 'https://cinemaone.net/images/movie_placeholder.png'
              }
              className="swiperImg"
              alt="swiperImg"
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComp;
