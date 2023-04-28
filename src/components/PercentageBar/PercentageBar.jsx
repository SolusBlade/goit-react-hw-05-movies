import clsx from 'clsx';
import s from './PercentageBar.module.css';

const PercentageBar = ({ rating }) => {

  function calculatePercentage(number) {
    const percentage = (number / 10) * 100;
    return Math.round(percentage);
  }

  function getColor(num) {
    if (num >= 80 && num <= 100) {
      return 'green';
    }
    if (num >= 40 && num < 80) {
      return 'orange';
    }
    if (num >= 0 && num < 40) {
      return 'red';
    }
    }
    
    const percentage = calculatePercentage(rating);

  return (
    <div
      className={clsx(
        s.c100,
        s['p' + percentage],
        s.small,
        s[getColor(percentage)]
      )}
    >
      <span>{rating.toFixed(1)}</span>
      <div className={s.slice}>
        <div className={s.bar}></div>
        <div className={s.fill}></div>
      </div>
    </div>
  );
};

export default PercentageBar;
