const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());           // <<< Enable CORS for all origins
app.use(express.json());   // Parse JSON

app.post('/track', (req, res) => {
  const { latitude, longitude } = req.body;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  res.json({ status: 'ok', received: true });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
