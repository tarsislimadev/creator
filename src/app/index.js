const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const { EventEmitter } = require('stream')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {})
const ee = new EventEmitter()
app.use(express.static('public'))

const io_events = ['message']
const socket_events = ['message']

setInterval(() => ee.emit('socket:message', Date.now()), 1000)

ee.addListener('socket:message', (d) => console.log('socket:message', d))

Array.from(socket_events)
  .map((sev) => ee.addListener('socket:' + sev, (...data) => console.log('socket:' + sev, ...data)))

io.on('connection', (socket) => {
  Array.from(socket_events)
    .map((sev) => socket.on(sev, (...data) => ee.emit('socket:' + sev, ...data)))
  Array.from(io_events)
    .map((sev) => ee.addListener('socket:' + sev, (...data) => socket.emit(sev, ...data)))
})

httpServer.listen(80, () => console.log(`Listening on port 80`))
