const routes = require('express').Router()
const { signinGoogle, signinFb, signinFbCheck } = require('../controllers/user')

routes.post('/signin/google', signinGoogle)
routes.post('/signin/facebook', signinFb)

module.exports = routes