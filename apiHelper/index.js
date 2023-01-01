const axios = require('axios')

const onSuccess = (response) => {
    if (response.data && response.data.success !== undefined) {
        return response.data
    }

    return {
        success: true,
        status: response.status,
        data: Object.freeze(response.data)
    }
}

const onError = (error) => {
    // log error
    return {
        success: false,
        error: {
            code: error.response?.status || error.code,
            stack: error.stack,
            message: error.message,
            data: error.response?.data
        }
    }
}
const getRequestHeaders = (customHeaders = {}) => {
    return {
        ...customHeaders,
        'Content-Type': 'application/json'
    }
}

class APIHelper {
    static async get(url, responseType = 'json', success = onSuccess, error = onError) {
        return axios.get(url, { headers: getRequestHeaders(), responseType }).then(success).catch(error)
    }

    static async post(url, data = {}, responseType = 'json', success, error, requestHeaders) {
        const jsonData = JSON.stringify(data)
        const headers = requestHeaders || getRequestHeaders()
        return axios
            .post(url, jsonData, { headers, responseType })
            .then(success || onSuccess)
            .catch(error || onError)
    }

    static async postForm(url, data, responseType = 'json', success = onSuccess, error = onError) {
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
        return axios
            .post(url, data, { headers: { ...headers } })
            .then(success)
            .catch(error)
    }
}

export { APIHelper as default, getRequestHeaders }
