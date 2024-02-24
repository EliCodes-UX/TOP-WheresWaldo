import { useState } from 'react';
import dropdownIcon from '../assets/dropdown.svg';
import HighScoreModal from './HighScoreModal';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <header className='header'>
        <div className='logo'>
          <img src='./src/assets/wheresWaldoLogo.png' className='logoImg' />
        </div>
        <div className='high-scores' onClick={handleClick}>
          <img src={dropdownIcon} alt='Dropdown' className='dropdown' />
          <h4>High Scores</h4>
        </div>
      </header>
      <div>{showModal && <HighScoreModal onClick={handleCloseModal} />}</div>
    </>
  );
}
