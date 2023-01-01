const BaseService = require('./BaseService')
const UserModel = require('../database/UserModel')

class GetRecommendUsersService extends BaseService {
    async exec(params) {
        const { data } = params || {}
        let { pageIdx = 0, pageSize = 5 } = data || {}
        let userData = []
        let count = 0
        await UserModel.count()
            .then((val) => {
                count = val
            })
            .catch((reason) => {
                console.log(`Get total count of users collection failed : ${reason}`)
            })
        let skip = pageIdx * pageSize
        if (skip >= count) {
            skip = 0
            pageIdx = 0
        }
        await UserModel.find({}, { address: 0, follows: 0 })
            .skip(skip)
            .sort({ lauds: -1 })
            .limit(pageSize)
            .lean()
            .then((val) => {
                userData = val
            })
            .catch((reason) => {
                console.log(`Filter data from users collection failed : ${reason}`)
            })
        return super.createSuccessResponse({
            data: userData,
            totalCount: count,
            pageIdx,
            pageSize
        })
    }
}

module.exports = {
    action: 'GetRecommendUsers',
    service: GetRecommendUsersService
}
