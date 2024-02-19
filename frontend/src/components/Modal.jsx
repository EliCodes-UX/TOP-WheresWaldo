/* eslint-disable react/prop-types */
export default function Modal({ heartPosition, onClose }) {
  const handleClickOutside = event => {
    if (!event.target.closest('.modal-content')) {
      onClose();
    }
  };

  return (
    <div className='modalOverlay' onClick={handleClickOutside}>
      <div className='modalContent'>
        <p>
          You found the heart at {heartPosition.x}, {heartPosition.y}
        </p>
        <button onClick={onClose} className='modalbtn btn'>
          Close Modal
        </button>
      </div>
    </div>
  );
}
