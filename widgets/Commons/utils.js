import { USER_PROFILE_DEFAULT_IMG } from './const'

const getUserProfileImg = (pic) => {
    return `/${pic || USER_PROFILE_DEFAULT_IMG}`
}

const formatNumber = (num) => {
    const val = +num
    if (Number.isNaN(val)) {
        return '0'
    }
    if (val > 1000) {
        return `${(val / 1000).toFixed(1)}k`
    }
    return val.toFixed(0)
}

export { getUserProfileImg, formatNumber }
