const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const { mongoDbUrl } = require('../config')

function connectToDb() {
    try {
        mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true })

        mongoose.connection.on('connected', function () {
            console.log('Mongodb connect succeeded: ', mongoDbUrl)
        })

        mongoose.connection.on('error', function (err) {
            console.log('Mongodb connect failed: ', err)
        })

        mongoose.connection.on('disconnection', function () {
            console.log('Mongodb disconnected!')
        })

        return mongoose
    } catch (e) {
        console.log(`MongoDB connecting failed: ${e}`)
    }
}

const db = connectToDb()

module.exports = db
