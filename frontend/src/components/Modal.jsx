/* eslint-disable react/prop-types */
export default function Modal({ heartPosition, onClose, elapsedTime }) {
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
        <p>it took you {elapsedTime} seconds to find it.</p>
        <form>
          <p>input your name for your score</p>
          <input type='text'></input>
        </form>
        <button onClick={onClose} className='modalbtn btn'>
          Close Modal
        </button>
      </div>
    </div>
  );
}
