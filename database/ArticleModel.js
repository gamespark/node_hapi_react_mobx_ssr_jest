const { Schema } = require('mongoose')
const db = require('./DbService')

const ArticleSchema = new Schema({
    articleId: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    user: {
        userId: {
            type: String
        },
        userName: {
            type: String
        }
    },
    createTime: {
        type: String
    },
    wordNum: {
        type: Number
    },
    comments: {
        type: Number
    },
    read: {
        type: Number
    },
    laud: {
        type: Number
    },
    star: {
        type: Number
    }
})

const ArticleModel = db.model('article', ArticleSchema)

module.exports = ArticleModel
