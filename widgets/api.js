import APIHelper from '../apiHelper'

const API_GET_ARTICLE_LIST = '/service/GetArticleList'
const API_GET_RECOMMEND_USERS = '/service/GetRecommendUsers'
const API_GET_ARTICLE_INFO = '/service/GetArticleInfo'
const API_GET_USER_ARTICLE_LIST = '/service/GetUserArticles'
const API_GET_RECOMMEND_ARTICLES = '/service/GetRecommendArticles'

const CallService = async (api, request, payload = null, responseType = 'json', suc) => {
    if (request && request.server) {
        return request.server
            .inject({
                method: 'POST',
                url: api,
                auth: request.auth.credentials ? request.auth : null,
                payload
            })
            .then((response) => {
                return response.result
            })
    } else {
        return APIHelper.post(api, payload, responseType, suc)
    }
}

const GetArticleList = async (pageIdx = 0, pageSize = 5, request) => {
    return CallService(API_GET_ARTICLE_LIST, request, { pageIdx, pageSize })
}

const GetRecommendUsers = async (pageIdx = 0, pageSize = 5, request) => {
    return CallService(API_GET_RECOMMEND_USERS, request, { pageIdx, pageSize })
}

const GetArticleById = async (articleId, request) => {
    return CallService(API_GET_ARTICLE_INFO, request, { articleId })
}

const GetUserArticleList = async (userId, articleId, request) => {
    return CallService(API_GET_USER_ARTICLE_LIST, request, { userId, articleId })
}

const GetRecommendArticles = async (articleId, request) => {
    return CallService(API_GET_RECOMMEND_ARTICLES, request, { articleId })
}

export { GetArticleList, GetRecommendUsers, GetArticleById, GetUserArticleList, GetRecommendArticles }
