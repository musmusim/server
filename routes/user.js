const routes = require('express').Router()
const { signinGoogle } = require('../controllers/user')

routes.post('/signin/google', signinGoogle)

module.exports = routes