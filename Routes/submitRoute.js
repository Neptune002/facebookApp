const express = require ('express')
const Router = express.Router()
const user = require('../models/submitAndGetmodel.js')
const sendDetails = require('../Controllers/submitController.js')

Router.route('/submit')
.post(sendDetails)