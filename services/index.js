const ServiceApiMappings = require('./maps')

const serviceWrapper = (request, h) => async (Service) => {
    const { payload, query } = request
    const data = payload ? (payload.data ? payload.data : payload) : {}
    if (Service) {
        const executeService = async function (args, h) {
            const service = new Service(request)
            return service.exec(args, h)
        }
        try {
            return await executeService({ data, query }, h)
        } catch (error) {
            console.log(error)
            return {
                success: false,
                code: 500,
                error: 'Server Internal Error'
            }
        }
    }
}

const handler = async (request, h) => {
    const { params } = request
    const { actionName } = params
    if (ServiceApiMappings[actionName]) {
        const { service } = ServiceApiMappings[actionName]
        return serviceWrapper(request, h)(service)
    }
    return {
        success: false,
        code: 404,
        error: `API ${actionName} not found.`
    }
}

const ServiceRouters = [
    {
        method: 'POST',
        path: '/service/{actionName}',
        options: {
            handler,
            timeout: {
                server: false,
                socket: 60000
            }
        }
    }
]

module.exports = ServiceRouters
