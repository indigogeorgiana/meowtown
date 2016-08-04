require('babel-register')
const config = require('../../config')
const app = require('../../app')
let server

const start = callback => {
  console.log('server starting....')
  server = app.listen(config.proxy.port, callback)
}
const stop = callback => {
  console.log('server stopping...')
  server.close()
  callback()
}

module.exports = function () {
 
  this.registerHandler('BeforeFeatures', (features, callback) => start(callback))

  this.registerHandler('AfterFeatures', (features, callback) => stop(callback))
}
