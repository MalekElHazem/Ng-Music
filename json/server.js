const express = require('express');
const app = express();
const port = 3000;

const songs = [
  // Your song data here
];

app.use(express.json());

// API endpoint to add a song
app.post('/api/songs', (req, res) => {
  const song = req.body;
  songs.push(song);
  res.json(song);
});


// API endpoint to update a song
app.put('/api/songs/:id', (req, res) => {
  const id = req.params.id;
  const song = req.body;
  songs[id] = song;
  res.json(song);
});

// API endpoint to delete a song
app.delete('/api/songs/:id', (req, res) => {
  const id = req.params.id;
  const song = songs[id];
  songs.splice(id, 1);
  res.json(song);
});





// API endpoint to get all songs
app.get('/api/songs', (req, res) => {
  res.json(songs);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
