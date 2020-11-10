//MQTT broker

const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = 1883

server.listen(port, function () {
  console.log('El servidor se esta ejecutando en el puerto: '+port, port)
})