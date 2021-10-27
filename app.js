const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const absoURL = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.send(`<h1>Auto Scaling Demo App</h1> <h4>Message: Success</h4> <p>Version: 1.0.0</p><p>IP: ${ip} <p>URL: ${req.url}<p>Absolute URL: ${absoURL}`);
})

app.listen(port, () => {
  console.log(`Demo app is up and listening to port ${port}`);
})
