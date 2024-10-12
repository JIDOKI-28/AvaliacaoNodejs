const express = require('express')
const ControllerApi = require('../controllers/api')

const router = express.Router()

router.get('/operacoes/', ControllerApi.Operacoes)
router.post('/adicao/', ControllerApi.Adicao)
router.post('/sub/', ControllerApi.Sub)
router.post('/divisao/', ControllerApi.Divisao)
router.post('/multi/', ControllerApi.Multi)
router.post('/potencia/', ControllerApi.Potencia)
router.post('/raiz/', ControllerApi.Raiz)

module.exports = router