const { renderToStaticMarkup } = require('react-dom/server')
const { ArticleDetailsPage, HomePage } = require('../widgets/pages')
const template = require('../templates/index')

const pageHandler =
    (pageRenderer, title, feature, params = {}) =>
    async (request, h) => {
        const reqParams = Object.assign({}, request.query, request.params)
        const { store, component } = await pageRenderer({
            params: { ...reqParams, request, ...params }
        })
        return template({
            title,
            feature,
            store,
            content: renderToStaticMarkup(component)
        })
    }

const PageTitle = (title) => `Test Project - ${title}`

const PageRouters = [
    {
        method: 'GET',
        path: '/',
        options: {
            handler: pageHandler(HomePage, PageTitle('Home'), 'home')
        }
    },
    {
        method: 'GET',
        path: '/article/{id}',
        options: {
            handler: pageHandler(ArticleDetailsPage, PageTitle('Article Details'), 'article-details')
        }
    }
]

module.exports = PageRouters
