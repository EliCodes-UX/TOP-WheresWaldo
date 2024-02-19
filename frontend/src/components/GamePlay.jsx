import heartSnail from '../assets/heart-snail.jpg';

export default function GamePlay() {
  return (
    <>
      <img className='heartSnail' src={heartSnail} alt='Heart Snail' />
      <button>Back to Main</button>
    </>
  );
}
