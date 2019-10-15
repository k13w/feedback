const db = require('../db/models');

module.exports = {
    createUser: payload => db.User.create(payload),
    authUser: payload => db.User.findOne({ where: payload})
}