const routes = require('express').Router()
const { signinGoogle, auth } = require('../controllers/user')

routes.post('/signin/google', signinGoogle)
routes.post('/authentication', auth)

module.exports = routes