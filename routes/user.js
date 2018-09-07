const routes = require('express').Router()
const { signinGoogle, signin, signup } = require('../controllers/user')

routes.post('/signin/google', signinGoogle)
routes.post('/signin', signin)
routes.post('/signup', signup)




module.exports = routes