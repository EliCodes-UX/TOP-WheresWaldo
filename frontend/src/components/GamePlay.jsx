/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heartSnail from '../assets/heart-snail.jpg';
import Modal from './Modal';
import axios from 'axios';

export default function GamePlay() {
  const navigate = useNavigate();

  const [heartPosition, setHeartPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [timerRunning, setTimerRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  // changes
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/start-timer')
      .then(response => {
        console.log(response.data);
        setStartTime(Date.now());
        setTimerRunning(true);
      })
      .catch(error => console.error(error));
  }, []);

  const handleBackToMain = () => {
    navigate('/', { replace: true });
  };

  const handleImgClick = event => {
    const imageRect = event.target.getBoundingClientRect();
    const clickX = event.clientX - imageRect.left;
    const clickY = event.clientY - imageRect.top;

    const clickedArea = {
      x: clickX,
      y: clickY,
    };

    setHeartPosition(clickedArea);

    const isWithinHeartArea =
      clickedArea.x >= 91.69921875 &&
      clickedArea.x <= 112.69921875 &&
      clickedArea.y >= 169.2890625 &&
      clickedArea.y <= 193.2890625;

    if (isWithinHeartArea) {
      axios
        .get('http://localhost:5000/api/stop-timer')
        .then(response => {
          console.log(response.data);
          setTimerRunning(false);
          const endTime = Date.now();
          const elapsedTimeInSeconds = Math.floor((endTime - startTime) / 1000);
          setElapsedTime(elapsedTimeInSeconds);
          setShowModal(true);
        })
        .catch(error => console.error(error));
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
      </div>
      {showModal && (
        <Modal
          heartPosition={heartPosition}
          onClick={handleCloseModal}
          elapsedTime={elapsedTime}
        />
      )}
    </div>
  );
}
