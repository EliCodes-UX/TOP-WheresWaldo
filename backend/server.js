const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:6996',
  })
);

let timerId = null;
let elapsedTime = 0;

app.use(express.json());

app.get('/api/start-timer', (req, res) => {
  if (!timerId) {
    timerId = setInterval(() => {
      elapsedTime += 1; // Increase elapsed time by 1 second
      console.log('Elapsed Time:', elapsedTime);
    }, 1000); // Run every second
    res.send('Timer started.');
  } else {
    res.send('Timer is already running.');
  }
});

app.get('/api/stop-timer', (req, res) => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    elapsedTime = 0;
    res.send('Timer stopped.');
  } else {
    res.send('Timer is not running.');
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
