'use strict'

const path = require('path');
const http = require('http');
const autocannon = require('autocannon');

const server = http.createServer();

server.listen(0, startBench);

function startBench() {
  const instance = autocannon({
    url: 'http://localhost:3001',
    connections: 10000,
    pipelining: 1, // default
    duration: 1,
    workers: 2,
    requests: [
      {
        method: 'POST', // POST for creating a fibonachi sequence
        path: '/input',
        headers: {
          'Content-type': 'application/json; charset=utf-8'
        },
        setupRequest: path.join(__dirname, 'helpers', `setup-request-post`),
        onResponse: path.join(__dirname, 'helpers', `on-response`)
      },
      {
        method: 'GET',
        path: '/output',
        setupRequest: path.join(__dirname, 'helpers', `setup-request-get`)
      }
    ],
  }, finishedBench)

  autocannon.track(instance);

  // this is used to kill the instance on CTRL-C
  process.once('SIGINT', () => {
    instance.stop();
  })

  function finishedBench(err, res) {
    console.log('finished bench', err, res);
  }
}
