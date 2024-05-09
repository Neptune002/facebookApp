const express = require('express')
const app = express()
const serveView = (req, res)=>{
    res.render('app')
}
module.exports = serveView