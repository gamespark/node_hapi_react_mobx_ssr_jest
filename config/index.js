module.exports = {
    options: {
        host: process?.env.HOST || '0.0.0.0',
        port: process?.env.PORT || 3000,
        router: { isCaseSensitive: false, stripTrailingSlash: true },
        routes: { timeout: { server: 5 * 60 * 1000, socket: 6 * 60 * 1000 } },
        state: { isSecure: false, isSameSite: 'Lax' }
    },
    keepAliveTimeout: 75000,
    mongoDbUrl: ''
}
