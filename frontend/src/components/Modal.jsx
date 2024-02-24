import axios from 'axios';
import { useState } from 'react';

/* eslint-disable react/prop-types */
export default function Modal({ heartPosition, onClick, elapsedTime }) {
  const [username, setUserName] = useState('');

  const saveUserData = async (username, elapsedTime) => {
    try {
      await axios.post('http://localhost:5000/api/saveUser', {
        username,
        elapsedTime,
      });
      console.log('user saved');
    } catch (error) {
      console.log('saved data failed', error);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    saveUserData(username, elapsedTime);
  };
  return (
    <div className='modalOverlay'>
      <div className='modalContent'>
        <p>
          You found the heart at {heartPosition.x}, {heartPosition.y}
        </p>
        <p>it took you {elapsedTime} seconds to find it.</p>
        <form onSubmit={handleSubmit}>
          <p>input your name for your score</p>
          <input
            type='text'
            value={username}
            onChange={e => setUserName(e.target.value)}
          ></input>
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
