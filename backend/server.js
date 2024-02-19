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

// app.get('/', (req, res) => {
//   const data = { message: 'Data from backend' };
//   res.json(data);
// });

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
