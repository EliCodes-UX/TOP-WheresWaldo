import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heartSnail from '../assets/heart-snail.jpg';

export default function GamePlay() {
  const navigate = useNavigate();

  const [showTargetingBox, setShowTargetingBox] = useState(false);
  const [heartPosition, setheartPosition] = useState({ x: 0, y: 0 });

  const handleBackToMain = () => {
    navigate('/', { replace: true });
  };

  const handleImgClick = event => {
    const imageRect = event.target.getBoundingClientRect();
    const x = event.clientX - imageRect.left;
    const y = event.clientY - imageRect.top;

    // Set the position of the targeting box
    console.log({ x, y });
    setheartPosition({ x, y });

    // Show the targeting box
    setShowTargetingBox(true);
  };

  const handleCloseImgClick = () => {
    setShowTargetingBox(false);
    console.log('clicked');
  };

  return (
    <div className='gamePlayDiv'>
      <div className='playGame'>
        <h1 className='gameHeader'>
          How fast can you find the Heart in the bunch of snails
        </h1>
        <img
          className='heartSnailGame'
          src={heartSnail}
          alt='Heart Snail'
          onClick={handleImgClick}
        />
      </div>
      {showTargetingBox && (
        <div
          className='targetingBox'
          onClick={handleCloseImgClick}
          style={{
            left: heartPosition.x,
            top: heartPosition.y,
          }}
        >
          tageting Box Content
        </div>
      )}
      <div className='buttons'>
        <div className='goHome'>
          <button className='homeBtn btn' onClick={handleBackToMain}>
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
