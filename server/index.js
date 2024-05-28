console.log('안녕 노드?');

const server=require('live-server');

const params={
  host: 'localhost',
  port: 3000,
  open: false,
  root: './client'
}

server.start(params)