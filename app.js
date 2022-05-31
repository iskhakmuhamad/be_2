const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.get('/try', (req, res) => {
  res.send('Hello World!')
});

// app.put('/try', (req, res) => {
//   res.send('Hello World!')
// });

// app.post('/try', (req, res) => {
//   res.send('Hello World!')
// });

// app.delete('/try', (req, res) => {
//   res.send('Hello World!')
// });

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});