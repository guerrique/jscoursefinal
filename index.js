const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

// console.log(__dirname);

const server = http.createServer((req, res) => {

  const pathName = url.parse(req.url, true).pathname;
  // console.log(pathName);
  const id = url.parse(req.url, true).query.id;
  // console.log(query);

    if (pathName === '/products' || pathName === '/') {
      res.writeHead(200, { 'Content-type': 'text/html'});
      res.end('this is the products page!');
    }

    else if (pathName === '/laptop' && id < laptopData.length) {
      res.writeHead(200, { 'Content-type': 'text/html'});
      res.end(`this is a laptop page for laptop ${id}!`);
    }

    else {
      res.writeHead(404, { 'Content-type': 'text/html'});
      res.end('you have entered a trap');
    }
});

server.listen(1337, '127.0.0.1', () => {
  console.log('listening for requests now');
});
