const mongoose = require ('mongoose')
schema = new mongoose.Schema({
    mobile: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true
    }
})
const user = mongoose.model('user', schema)
module.exports = user
