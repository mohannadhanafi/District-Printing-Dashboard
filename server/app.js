const express = require('express');
const path = require('path');

const app = express();
app
  .set('port', process.env.PORT || 5000)
  .disable('x-powered-by')
  .use(express.static(path.join(__dirname, '..', 'build')))
  .get('*', (req, res) => {
    res.sendFile(
      path.join(__dirname, '..', 'build', 'index.html'),
    );
  });

module.exports = app;