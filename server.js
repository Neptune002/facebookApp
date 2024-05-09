const express = require('express')
const dotenv = require('dotenv')
const serveRouter = require ('./Routes/serveRoute.js')
const mongoose = require ('mongoose')

dotenv.config({path:'./config.env'})

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public/styles'))
app.use(express.urlencoded({extended:false}))
app.use('/', serveRouter)

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=>{
    console.log('database connection successful')
})
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server started on port ${process.env.PORT}`)
})
