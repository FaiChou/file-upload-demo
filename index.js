const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.raw({ limit: '100mb' }));
app.post('/upload', (req, res) => {
  console.log(`start receiving... ${Date.now()}`);
  res.status(200).send('OK');
  // setTimeout(() => {
  //   console.log(`file size: ${req.body.length} bytes`);
  // }, 3000);
});

app.listen(3000, () => {
  console.log('server run on http://localhost:3000');
});
