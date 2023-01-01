/* eslint-disable react/prop-types */
import React from 'react'
import { formatNumber } from '../../../Commons/utils'

const ArticleItem = ({ articleId, title, read }) => {
    return (
        <div className="article-item">
            <a href={`/article/${articleId}`}>{title}</a>
            <p className="info">{`阅读: ${formatNumber(read)}`}</p>
        </div>
    )
}

export default ArticleItem
