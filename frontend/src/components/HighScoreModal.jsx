import { useEffect, useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
export default function HighScoreModal({ onClick }) {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    axios
      .get('/api/highScores')
      .then(response => {
        setHighScores(response.data);
      })
      .catch(error => {
        console.error('Error fetching high scores:', error);
      });
  }, []);

  const sortedScores = highScores.sort((a, b) => a.timeElapsed - b.timeElapsed);

  const top10Scores = sortedScores.slice(0, 10);

  return (
    <div className='modalOverlay highScores'>
      <h2>Top 10 High Scores</h2>
      <ol>
        {top10Scores.map((score, index) => (
          <li key={index}>
            <strong>Username:</strong> {score.username},{' '}
            <strong>Time Elapsed:</strong> {score.timeElapsed} seconds
          </li>
        ))}
      </ol>
      <button className='btn' onClick={onClick}>
        Close
      </button>
    </div>
  );
}
// app needs refactoring
