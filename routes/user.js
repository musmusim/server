const routes = require('express').Router()

const { signinGoogle, auth, signinFb } = require('../controllers/user')

routes.post('/signin/google', signinGoogle)
routes.post('/authentication', auth)
routes.post('/signin/facebook', signinFb)


module.exports = routes