import axios from 'axios';
import { useState } from 'react';

/* eslint-disable react/prop-types */
export default function Modal({ heartPosition, onClick, timeElapsed }) {
  const [username, setUserName] = useState('');

  const saveUserData = async (username, timeElapsed) => {
    try {
      await axios.post(
        'https://top-whereswaldo-api.onrender.com/api/saveUser',
        {
          username,
          timeElapsed,
        }
      );
      console.log('user saved');
    } catch (error) {
      console.log('saved data failed', error);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    saveUserData(username, timeElapsed);
  };
  return (
    <div className='modalOverlay'>
      <div className='modalContent'>
        <p>
          You found the heart at {heartPosition.x}, {heartPosition.y}
        </p>
        <p>it took you {timeElapsed} seconds to find it.</p>
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
          Close
        </button>
      </div>
    </div>
  );
}
