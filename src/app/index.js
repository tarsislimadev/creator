const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const { EventEmitter } = require('stream')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {})
const ee = new EventEmitter()
app.use(express.static('public'))

const io_events = []
const socket_events = ['message']

io.on('connection', (socket) => {
  Array.from(socket_events)
    .map((sev) => socket.on(sev, (...data) => ee.emit('socket:' + sev, ...data)))
})

Array.from(io_events)
  .map((sev) => io.on(sev, (...data) => ee.emit('io:' + sev, ...data)))

httpServer.listen(80, () => console.log(`Listening on port 80`))
