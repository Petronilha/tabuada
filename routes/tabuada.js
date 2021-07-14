const { Router } = require('express')
const router = Router()

const tabuadaController = require('../controllers/tabuada')

router.get('/', tabuadaController.list)
router.get('/do/:num', tabuadaController.tabuada)

module.exports = router