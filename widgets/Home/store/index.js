import { makeAutoObservable } from 'mobx'
import { GetArticleList, GetRecommendUsers } from '../../api'

export default class Store {
    articleData = {}
    loading = false

    userData = {}
    userLoading = false

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    hydrate(data) {
        Object.assign(this, data)
    }

    loadMoreArticles() {
        const { data = [], pageIdx = 0, pageSize = 5 } = this.articleData
        this.loading = true
        GetArticleList(pageIdx + 1, pageSize).then((res) => {
            if (res.success && res.data) {
                const { data: newData } = res.data
                this.articleData = res.data
                this.articleData.data = [].concat(data, newData)
                this.loading = false
            }
        })
    }

    changeUsers() {
        const { pageIdx = 0, pageSize = 5 } = this.userData
        this.userLoading = true
        GetRecommendUsers(pageIdx + 1, pageSize).then((res) => {
            if (res.success && res.data) {
                this.userData = res.data
                this.userLoading = false
            }
        })
    }

    async init(params) {
        const { request } = params || {}
        const pageIdx = 0
        const pageSize = 5
        const [articleRes, userRes] = await Promise.all([
            GetArticleList(pageIdx, pageSize, request),
            GetRecommendUsers(pageIdx, pageSize, request)
        ])
        if (articleRes.success && articleRes.data) {
            this.articleData = articleRes.data
        }
        if (userRes.success && userRes.data) {
            this.userData = userRes.data
        }
    }
}
