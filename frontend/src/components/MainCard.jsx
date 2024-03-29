import heartSnail from '../assets/heart-snail.jpg';
import { useNavigate } from 'react-router-dom';

export default function MainCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('./GamePlay', { replace: true });
  };

  return (
    <div className='mainCard'>
      <div className='gameCard'>
        <h2 className='gameHeader'>Find the Heart</h2>
        <img
          className='heartSnailImg'
          src={heartSnail}
          alt='Heart Snail'
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
