import dropdownIcon from './assets/dropdown.svg';
import './App.css';

function App() {
  return (
    <>
      <header className='header'>
        <div className='logo'>
          <img src='./src/assets/wheresWaldoLogo.png' className='logoImg' />
        </div>
        <div className='high-scores'>
          <img src={dropdownIcon} alt='Dropdown' className='dropdown' />
        </div>
      </header>
    </>
  );
}

export default App;
