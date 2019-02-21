const { Client } = require('klasa')

class Weeb extends Client {
  constructor (config) {
    super(config)
    this.constructor[Client.plugin].call(this)
  }
}

module.exports = Weeb
