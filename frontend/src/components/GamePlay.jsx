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
        <h1 className='gameHeader'>
          How fast can you find the Heart in the bunch of snails
        </h1>
        <img className='heartSnailGame' src={heartSnail} alt='Heart Snail' />
      </div>
      <div className='buttons'>
        <div className='goHome'>
          <button className='homeBtn btn' onClick={handleClick}>
            Back to Main
          </button>
        </div>
        <div>
          <button className='btn'>Restart</button>
        </div>
      </div>
    </div>
  );
}
