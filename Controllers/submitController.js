const user = require('../models/submitAndGetmodel.js')
const sendDetails = (req, res)=>{
    mobile = req.body.mobile
    password = req.body.password
    const newUser = new user({
        mobile,
        password
    })
newUser.save()
.then(user =>{
    console.log(`new user created ${user}`)
})
.catch((errr)=>{
    console.log(`could not create user ${err}`)
})
res.json(req.body)
}
module.exports = sendDetails