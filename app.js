const express = require('express');
const app = express();
var git = require('git-rev-sync');

app.listen(3000, () => {
  console.log('Application started and Listening on port 3000');
});

// const gitHash = git.short();
// console.log(`Git hash: ${gitHash}`);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

// // Songs
app.get('/ParaMi', (req, res) => {
  res.sendFile(__dirname + '/pages/ParaMi.html');
});

app.get('/YouTube', (req, res) => {
  res.sendFile(__dirname + '/pages/YouTube.html');
});

// // Config
// app.get('/deploy', (req, res) => {
//   res.sendFile(__dirname + '/pages/deploy.html');
// });
