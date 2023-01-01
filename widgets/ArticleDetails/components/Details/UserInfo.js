/* eslint-disable react/prop-types */
import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../context'
import { getUserProfileImg, formatNumber } from '../../../Commons/utils'

const UserInfo = () => {
    const { articleData } = useStore()
    const { user, wordNum, createTime, read, star } = articleData
    const { userName, pic, address } = user
    const infoItem = (label, val) => (
        <div key={label} className="info-item">
            <span>{label}</span>
            <span>{val}</span>
        </div>
    )
    return (
        <div className="user-info">
            <img src={getUserProfileImg(pic)} />
            <div>
                <div className="top">
                    <a href="#">{userName}</a>
                    <a href="#">关注</a>
                    <p>{`IP属地: ${address}`}</p>
                </div>
                <div className="info">
                    {infoItem('星:', formatNumber(star))}
                    {infoItem('', createTime)}
                    {infoItem('总字数:', formatNumber(wordNum))}
                    {infoItem('阅读:', formatNumber(read))}
                </div>
            </div>
        </div>
    )
}

export default observer(UserInfo)
