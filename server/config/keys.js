if (process.env.NODE_ENV === 'production') {
  console.log('keys')
  module.exports = require('./prod')
} else {
  console.log('dev keys')
  module.exports = require('./dev')
}