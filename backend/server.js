const cors = require('cors');
const mongoose = require('mongoose');
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
let timeElapsed = 0;

app.use(express.json());

mongoose.connect(
  'mongodb+srv://elibonner:CRSbTdYZd5FBEuj0@cluster0.phm1xtr.mongodb.net/?retryWrites=true&w=majority'
);
const db = mongoose.connection;

// new Schema
const userSchema = new mongoose.Schema({
  username: String,
  timeElapsed: Number,
});

const User = mongoose.model('URL', userSchema);

app.post('/api/saveUser', async (req, res) => {
  const { username, timeElapsed } = req.body;

  const newUser = new User({
    username,
    timeElapsed,
  });

  try {
    await newUser.save();
    res.status(200).send('User data saved');
  } catch (error) {
    console.error('error saving data', error);
    res.status(500).send('internal server error');
  }
});

app.get('/api/start-timer', (req, res) => {
  if (!timerId) {
    timerId = setInterval(() => {
      timeElapsed += 1;
      console.log('Elapsed Time:', timeElapsed);
    }, 1000);
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
