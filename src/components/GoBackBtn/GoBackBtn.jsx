import { useNavigate, useLocation } from 'react-router-dom';
import { TiArrowLeftThick } from 'react-icons/ti';

const GoBackBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBackBtnClick = () => {
    const prevPageLoacation = location.state;
    navigate(prevPageLoacation);
  };

  return (
    <button onClick={handleGoBackBtnClick} className="backBtn">
      <TiArrowLeftThick />
      Go back
    </button>
  );
};

export default GoBackBtn;
