require('dotenv').config()
const Hapi = require('@hapi/hapi')
const Inert = require('@hapi/inert')
const config = require('../../config')
const Blipp = require('blipp')
const { enableStaticRendering } = require('mobx-react-lite')

enableStaticRendering(true)

process
    .on('unhandledRejection', (reason, p) => {
        console.error(reason, 'Unhandled Rejection at Promise', p)
    })
    .on('uncaughtException', (err) => {
        console.error(err, 'Uncaught Exception thrown')
        process.exit(1)
    })

const registerPlugins = async (server) => {
    const plugins = [Inert]
    await server.register(plugins)
    await server.register({ plugin: Blipp, options: { showAuth: true, showStart: true } })
}

const startServer = async (routes) => {
    try {
        const server = Hapi.server(config.options)
        await registerPlugins(server)
        server.listener.keepAliveTimeout = config.keepAliveTimeout
        server.route(routes.flat())
        await server.start()
    } catch (e) {
        console.log(e.toString())
    }
}

module.exports = startServer
