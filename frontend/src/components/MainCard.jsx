import heartSnail from '../assets/heart-snail.jpg';

export default function MainCard() {
  return (
    <div className='mainCard'>
      <div className='game'>
        <h2 className='gameHeader'>Find the Heart</h2>
        <img className='heartSnail' src={heartSnail} />
      </div>
    </div>
  );
}
