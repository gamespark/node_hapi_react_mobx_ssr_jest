/* eslint-disable react/prop-types */
import React, { memo } from 'react'
import { getUserProfileImg, formatNumber } from '../../Commons/utils'

const UserItem = ({ userName, pic, total, lauds }) => {
    return (
        <div className="user-item">
            <img src={getUserProfileImg(pic)} />
            <div className="user-info">
                <a href="#">{userName}</a>
                <p>{`写了${formatNumber(total)}字 · ${formatNumber(lauds)}喜欢`}</p>
            </div>
            <div className="follow">
                <a href="#">关注</a>
            </div>
        </div>
    )
}

export default memo(UserItem)
