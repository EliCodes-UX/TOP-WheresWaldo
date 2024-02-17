import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('error', error));
  }, []);
  return (
    <>
      <div>{data ? <p>{data.message}</p> : <p>Loading...</p>}</div>
    </>
  );
}

export default App;
