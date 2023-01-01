const startServer = require('./host/index')
const PageRouters = require('../routers')
const StaticRouters = require('../routers/static')
const ServiceRouters = require('../services')

startServer([PageRouters, StaticRouters, ServiceRouters])
