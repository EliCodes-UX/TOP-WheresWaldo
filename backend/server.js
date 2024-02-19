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

let startTime;
let timerInterval;
let heartClicked = false;

app.get('/startTimer', (req, res) => {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const timeElapsed = Date.now() - startTime;
    res.json({ timeElapsed: timeElapsed, heartClicked });
  }, 1000);
});

app.get('/heartClick', (req, res) => {
  if (!heartClicked) {
    heartClicked = true;
    clearInterval(timerInterval);
  }
  res.sendStatus(200);
});

// app.get('/', (req, res) => {
//   const data = { message: 'Data from backend' };
//   res.json(data);
// });

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
