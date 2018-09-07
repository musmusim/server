const routes = require('express').Router()
const { signinGoogle, signinFb } = require('../controllers/user')

routes.post('/signin/google', signinGoogle)
routes.post('/signin/facebook', signinFb)

module.exports = routes