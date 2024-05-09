const express = require ('express')
const router = express.Router()
const serveView = require('../Controllers/servePageController.js')
const user = require('../models/submitAndGetmodel.js')
const sendDetails = require('../Controllers/submitController.js')

router.route('/facebooklogin')
.get(serveView)

router.route('/submit')
.post(sendDetails)
module.exports = router