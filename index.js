import Server from './server.js'

const server = new Server()
server.start()
class Handler {
  intercept() {
    console.info('noop')
  }
}
