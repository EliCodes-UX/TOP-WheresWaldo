import { useNavigate } from 'react-router-dom';
import heartSnail from '../assets/heart-snail.jpg';

export default function GamePlay() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className='gamePlayDiv'>
      <div className='playGame'>
        <img className='heartSnailGame' src={heartSnail} alt='Heart Snail' />
      </div>
      <div className='goHome'>
        <button className='homeBtn' onClick={handleClick}>
          Back to Main
        </button>
      </div>
    </div>
  );
}
