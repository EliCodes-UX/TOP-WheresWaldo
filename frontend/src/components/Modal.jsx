/* eslint-disable react/prop-types */
export default function Modal({ heartPosition, onClick, elapsedTime }) {
  return (
    <div className='modalOverlay'>
      <div className='modalContent'>
        <p>
          You found the heart at {heartPosition.x}, {heartPosition.y}
        </p>
        <p>it took you {elapsedTime} seconds to find it.</p>
        <form>
          <p>input your name for your score</p>
          <input type='text'></input>
          <button type='submit' className='submit btn'>
            Submit
          </button>
        </form>
        <button onClick={onClick} className='modalbtn btn'>
          Close Modal
        </button>
      </div>
    </div>
  );
}
