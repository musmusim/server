const routes    = require('express').Router()
const users     = require('./user')
const contencts = require('./content')

routes.use('/users', users)
routes.use('/contents', contencts)

module.exports = routes
