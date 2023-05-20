const jwt = require('jsonwebtoken');
const {SECRET} = require('../config/config')
const JWT = {
    generate(value,expiresIn){
        return jwt.sign(value,SECRET,{expiresIn})
    },
    verify(token){
        try{
            return jwt.verify(token,SECRET)
        }catch(e){
            return false
        }

    }

}
module.exports = JWT