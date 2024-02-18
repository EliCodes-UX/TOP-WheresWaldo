import dropdownIcon from '../assets/dropdown.svg';

export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <img src='./src/assets/wheresWaldoLogo.png' className='logoImg' />
      </div>
      <div className='high-scores'>
        <img src={dropdownIcon} alt='Dropdown' className='dropdown' />
        <h4>High Scores</h4>
      </div>
    </header>
  );
}
