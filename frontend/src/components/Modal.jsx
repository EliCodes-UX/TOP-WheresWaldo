import axios from 'axios';

/* eslint-disable react/prop-types */
export default function Modal({ heartPosition, onClick, elapsedTime }) {
  const [username, setUserName]

  const saveUserData = async (username, elapsedTime) => {
    try {
      await axios.post('http://localhost:5000/api/save-user-data', {
        username,
        elapsedTime,
      });
      console.log('user saved');
    } catch (error) {
      console.log('saved data failed', error);
    }
  };
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
          <button type='submit' className='submit btn' onSubmit={saveUserData}>
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
