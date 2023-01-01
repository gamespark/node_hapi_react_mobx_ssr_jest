const BaseService = require('./BaseService')
const ArticleModel = require('../database/ArticleModel')

class GetRecommendArticlesService extends BaseService {
    async exec(params) {
        const { data } = params || {}
        const { articleId = '', pageSize = 5 } = data || {}
        let articleData = []
        await ArticleModel.find(
            { articleId: { $ne: articleId } },
            { createTime: 0, wordNum: 0, comments: 0, laud: 0, star: 0, content: 0 }
        )
            .skip(0)
            .sort({ read: -1 })
            .limit(pageSize)
            .lean()
            .then((val) => {
                articleData = val
            })
            .catch((reason) => {
                console.log(`Filter data from articles collection failed : ${reason}`)
            })
        return super.createSuccessResponse(articleData)
    }
}

module.exports = {
    action: 'GetRecommendArticles',
    service: GetRecommendArticlesService
}
