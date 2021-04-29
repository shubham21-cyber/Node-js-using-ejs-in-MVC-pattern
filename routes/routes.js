const express = require('express')
const controller = require('../controller/controller')
const Router = express.Router()

Router.get('/',controller.getHome)
Router.get('/details/:productId',controller.getProductDetail)
module.exports = Router
