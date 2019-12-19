const router = require('express').Router()

const { listUsers } = require('../controllers/users')
const { isAuthenticated } = require('../controllers/auth')

router.get('/', isAuthenticated, listUsers)

module.exports = router