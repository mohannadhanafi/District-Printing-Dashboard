const http = require('http');
const app = require('./app');

const server = http.Server(app);

const port = app.get('port');

  server.listen(port, () => {
    console.log(`the server started on port ${port}`);
  });