const http = require('http');
const data = require('./testdata.json');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(data));
});
server.listen(3001, () => {
    console.log('Server is running...');
});
