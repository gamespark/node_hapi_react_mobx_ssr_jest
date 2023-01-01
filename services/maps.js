const GetArticleListService = require('./GetArticleListService')
const GetUserArticlesService = require('./GetUserArticlesService')
const GetRecommendArticlesService = require('./GetRecommendArticlesService')
const GetRecommendUsersService = require('./GetRecommendUsersService')
const GetArticleInfoService = require('./GetArticleInfoService')

const ServiceApiMappings = {}

ServiceApiMappings[GetArticleListService.action] = GetArticleListService
ServiceApiMappings[GetUserArticlesService.action] = GetUserArticlesService
ServiceApiMappings[GetRecommendArticlesService.action] = GetRecommendArticlesService
ServiceApiMappings[GetRecommendUsersService.action] = GetRecommendUsersService
ServiceApiMappings[GetArticleInfoService.action] = GetArticleInfoService

module.exports = ServiceApiMappings
