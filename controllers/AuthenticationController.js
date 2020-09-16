const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt')
module.exports = {
    async authenticate(req, res) {
        if (!(req.body.username === 'username' && req.body.password === 'password'))
            res.send({
                message: 'Wrong username or password'
            })

        const token = jwt.sign({sub: 'username'}, jwtConfig.secret, {expiresIn: jwtConfig.expiresIn})
        res.send({
            message: 'Auth successful',
            token: token
        });
    }
}