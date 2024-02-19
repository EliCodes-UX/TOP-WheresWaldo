import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heartSnail from '../assets/heart-snail.jpg';
import Modal from './Modal';

export default function GamePlay() {
  const navigate = useNavigate();

  const [heartPosition, setHeartPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);

  const handleBackToMain = () => {
    navigate('/', { replace: true });
  };

  const handleImgClick = event => {
    const imageRect = event.target.getBoundingClientRect();
    const clickX = event.clientX - imageRect.left;
    const clickY = event.clientY - imageRect.top;

    // Check if the click is within the desired area
    const clickedArea = {
      x: clickX,
      y: clickY,
    };

    // Save the coordinates
    setHeartPosition(clickedArea);

    // Log 'clicked' when the specified area is clicked
    if (
      clickedArea.x >= 91.69921875 &&
      clickedArea.x <= 112.69921875 &&
      clickedArea.y >= 169.2890625 &&
      clickedArea.y <= 193.2890625
    ) {
      console.log('clicked');
      setShowModal(true);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
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
      {showModal && (
        <Modal onClick={handleCloseModal} heartPosition={heartPosition}></Modal>
      )}
    </div>
  );
}
