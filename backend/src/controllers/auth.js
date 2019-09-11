const services = require('../services/index')
const authConfig = require('../config/auth')
const jwt = require('jsonwebtoken');



module.exports = {
    
    async store(req, res) {
        const generateToken = (params = {}) => {
            return jwt.sign(params, authConfig.secret, {
                expiresIn: 86400,
            });
        }

        try {
            
            const user = await services.authUser(req.body)

            res.send({
                user,
                token: generateToken({ id: user.id, name: user.name })
            })
        } catch(err) {
            res.status(400).send({ error: 'usuário não encontrado!'})
        }
    }
}