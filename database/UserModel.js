const { Schema } = require('mongoose')
const db = require('./DbService')

const UserSchema = new Schema({
    userId: {
        type: String
    },
    userName: {
        type: String
    },
    address: {
        type: String
    },
    pic: {
        type: String
    },
    follows: {
        type: Number
    },
    lauds: {
        type: Number
    },
    total: {
        type: Number
    }
})

const UserModel = db.model('user', UserSchema)

module.exports = UserModel
