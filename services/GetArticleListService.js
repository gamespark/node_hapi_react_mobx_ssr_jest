const BaseService = require('./BaseService')
const ArticleModel = require('../database/ArticleModel')

class GetArticleListService extends BaseService {
    getArticleShortDesc(content) {
        const descMaxLength = 100
        if (!content) {
            return ''
        }
        const cleanText = content.replace(/(<([^>]+)>)/gi, ' ')
        return cleanText.length > descMaxLength ? `${cleanText.substr(0, descMaxLength)}...` : cleanText
    }

    processData(data) {
        return data.map(({ articleId, title, content, comment, user, comments, laud, star }) => {
            const { userId, userName } = user
            return {
                articleId,
                title,
                content: this.getArticleShortDesc(content),
                comment,
                user: {
                    userId,
                    userName
                },
                comments,
                laud,
                star
            }
        })
    }

    async exec(params) {
        const { data } = params || {}
        const { pageIdx = 0, pageSize = 5 } = data || {}
        let count = 0
        let articleData = []
        await ArticleModel.count()
            .then((val) => {
                count = val
            })
            .catch((reason) => {
                console.log(`Get total count of articles collection failed : ${reason}`)
            })
        const skip = pageIdx * pageSize
        if (skip < count) {
            await ArticleModel.find({}, { createTime: 0, wordNum: 0, read: 0 })
                .skip(skip)
                .sort({ star: -1 })
                .limit(pageSize)
                .lean()
                .then((val) => {
                    articleData = val
                })
                .catch((reason) => {
                    console.log(`Filter data from articles collection failed : ${reason}`)
                })
        }
        return super.createSuccessResponse({
            data: this.processData(articleData),
            totalCount: count,
            pageIdx,
            pageSize
        })
    }
}

module.exports = {
    action: 'GetArticleList',
    service: GetArticleListService
}
