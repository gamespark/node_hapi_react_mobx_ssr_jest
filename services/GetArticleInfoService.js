const BaseService = require('./BaseService')
const ArticleModel = require('../database/ArticleModel')
const UserModel = require('../database/UserModel')

class GetArticleInfoService extends BaseService {
    async exec(params) {
        const { data } = params || {}
        const { articleId } = data || {}
        let articleData = null
        await ArticleModel.find({ articleId })
            .lean()
            .then((val) => {
                articleData = val[0]
            })
            .catch((reason) => {
                console.log(`Get data of articles collection failed : ${reason}`)
            })
        if (articleData) {
            await UserModel.find({ userId: articleData.user.userId }, { follows: 0, lauds: 0 })
                .lean()
                .then((val) => {
                    articleData.user = val[0]
                })
                .catch((reason) => {
                    console.log(`Get data of users collection failed : ${reason}`)
                })
        }
        return super.createSuccessResponse(articleData)
    }
}

module.exports = {
    action: 'GetArticleInfo',
    service: GetArticleInfoService
}
