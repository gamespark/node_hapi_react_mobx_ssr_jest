const path = require('path')

const StaticRoutes = [
    {
        method: 'GET',
        path: '/assets/{path*}',
        options: {
            auth: false,
            handler: {
                directory: {
                    path: path.join(__dirname, '..', 'public')
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/{path*}',
        options: {
            auth: false,
            handler: {
                directory: {
                    path: path.join(__dirname, '..', 'public')
                }
            }
        }
    }
]

module.exports = StaticRoutes
