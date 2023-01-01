class BaseService {
    constructor(request) {
        this.request = request
    }

    createSuccessResponse(data) {
        return {
            success: true,
            code: 200,
            data
        }
    }

    createErrorResponse(error, code = 500) {
        return {
            success: false,
            code,
            error
        }
    }

    exec() {}
}

module.exports = BaseService
