/* eslint-disable react/prop-types */
import React, { memo } from 'react'
import { formatNumber } from '../../Commons/utils'

const ArticleItem = ({ articleId, title, content, user, comments, laud, star }) => {
    const infoItem = (label, val) => (
        <div key={label} className="info-item">
            <span>{label}</span>
            <span>{val}</span>
        </div>
    )
    return (
        <div className="article-item">
            <a href={`/article/${articleId}`}>{title}</a>
            <p>{content}</p>
            <div className="info-bar">
                {infoItem('星:', formatNumber(star))}
                {infoItem('', user.userName)}
                {infoItem('评论:', formatNumber(comments))}
                {infoItem('点赞:', formatNumber(laud))}
            </div>
        </div>
    )
}

export default memo(ArticleItem)
