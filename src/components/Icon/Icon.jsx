import icons from '../../assets/icons/sprite.svg';

const Icon = ({ name, width, height, secondaryClassName }) => (
  <svg
    width={width}
    height={height}
    className={secondaryClassName}
  >
    <use xlinkHref={`${icons}#${name}`} />
  </svg>
);

export default Icon;
