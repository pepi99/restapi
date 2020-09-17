const jwt = require('jsonwebtoken')
const jwtConfig = require('../config/jwt')
module.exports = {
    checktoken: function (req, res, next) {
        let token = req.headers['x-access-token'] || req.headers['authorization'];
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
        if (token) {
            jwt.verify(token, jwtConfig.secret, (err, decoded) => {
                if (err) {
                    res.send({
                        error: 'Token is not valid'
                    })
                } else {
                    req.decoded = decoded;
                }
            })
        } else {
            res.send({
                message: 'No token supplied'
            })
        }


    }
}