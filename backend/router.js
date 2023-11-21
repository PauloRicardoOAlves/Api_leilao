const {Router} = require('express')
const { registro } = require('./controllers/registro')
const router = Router()

router.post('/cadastrar', registro)

module.exports = router