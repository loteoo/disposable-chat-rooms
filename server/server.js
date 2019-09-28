const io = require('socket.io')
const server = io.listen(8888)
const items = require('./items')

server.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('load items', (data, reply) => {
    console.log(data)
    reply(items)
  })
})
