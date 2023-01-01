const BaseService = require('./BaseService')
const ArticleModel = require('../database/ArticleModel')

class GetUserArticlesService extends BaseService {
    async exec(params) {
        const { data } = params || {}
        const { userId = '', articleId = '', pageSize = 5 } = data || {}
        let articleData = []
        await ArticleModel.find(
            { 'user.userId': userId, articleId: { $ne: articleId } },
            { createTime: 0, wordNum: 0, comments: 0, laud: 0, star: 0, content: 0 }
        )
            .sort({ star: -1 })
            .limit(pageSize)
            .lean()
            .then((val) => {
                articleData = val
            })
            .catch((reason) => {
                console.log(`Get data of articles collection failed : ${reason}`)
            })
        return super.createSuccessResponse(articleData)
    }
}

module.exports = {
    action: 'GetUserArticles',
    service: GetUserArticlesService
}
