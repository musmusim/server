const routes = require('express').Router()
const { signinGoogle, auth, signinFb, signin, signup} = require('../controllers/user')

routes.post('/signin/google', signinGoogle)
routes.post('/authentication', auth)
routes.post('/signin/facebook', signinFb)
routes.post('/signin', signin)
routes.post('/signup', signup)

module.exports = routes