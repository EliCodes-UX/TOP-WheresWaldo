export default function HighScoreModal({ onClick }) {
  return (
    <div>
      <div>
        <ol>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
      <button className='btn' onClick={onClick}>
        Close
      </button>
    </div>
  );
}
