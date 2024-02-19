/* eslint-disable react/prop-types */
export default function Modal({ heartPosition, onClose }) {
  const handleClickOutside = event => {
    if (!event.target.closest('.modal-content')) {
      onClose();
    }
  };

  return (
    <div className='modal-overlay' onClick={handleClickOutside}>
      <div className='modal-content'>
        <p>
          You found the heart at {heartPosition.x}, {heartPosition.y}
        </p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
}
