const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt')

module.exports = {
    async authenticate(req, res) {
        let username = req.body.username
        let password = req.body.password

        let hardcodedUsername = 'username'
        let hardcodedPassword = 'password'
        if (username && password) {
            if (username === hardcodedUsername && password === hardcodedPassword) {
                let token = jwt.sign({username: username},
                    jwtConfig.secret,
                    {
                        expiresIn: jwtConfig.expiresIn
                    })
                res.cookie('jwtToken', token)
                res.send({
                    message: 'Auth successful',
                    token: token
                })
            } else {
                res.send({
                    error: 'Incorrect username or password'
                })
            }
        } else {
            res.send({
                error: 'Provide username and password'
            })
        }
    },
    checkToken: (req, res, next) => {
        req.headers['authorization'] = req.cookies.jwtToken // Set token in req from the cookie
        let token = req.headers['x-access-token'] || req.headers['authorization'];
        if (token) {
            if (token.startsWith(' Bearer ')) {
                token = token.slice(7, token.length)
            }
            jwt.verify(token, jwtConfig.secret, (err, decoded) => {
                if (err) {
                    res.status(401).send({
                        error: 'Not a valid token'
                    })
                } else {
                    req.decoded = decoded
                    next();
                }
            })
        } else {
            res.status(401).send({
                error: 'Token is not provided'
            })
        }
    }
}