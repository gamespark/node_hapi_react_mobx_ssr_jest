import { makeAutoObservable } from 'mobx'
import { GetArticleById, GetUserArticleList, GetRecommendArticles } from '../../api'

export default class Store {
    articleData = null
    userArticles = []
    recommendArticles = []
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    hydrate(data) {
        Object.assign(this, data)
        if (this.articleData) {
            this.getRightSectionData()
        }
    }

    *getRightSectionData() {
        const [userArticleRes, recommendArticleRes] = yield Promise.all([
            GetUserArticleList(this.articleData.user.userId, this.articleData.articleId),
            GetRecommendArticles(this.articleData.articleId)
        ])
        if (userArticleRes.success && userArticleRes.data) {
            this.userArticles = userArticleRes.data
        }
        if (recommendArticleRes.success && recommendArticleRes.data) {
            this.recommendArticles = recommendArticleRes.data
        }
    }

    async init(params) {
        const { request, id } = params || {}
        const res = await GetArticleById(id, request)
        if (res.success) {
            this.articleData = res.data
        }
    }

    laudArticle() {
        window.open('/', '_self')
    }

    rewardArticle() {
        window.open('/', '_self')
    }

    viewMoreArticles() {
        window.open('/', '_self')
    }
}
