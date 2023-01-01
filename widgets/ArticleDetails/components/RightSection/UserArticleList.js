import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../context'
import ArticleItem from './ArticleItem'
import { getUserProfileImg, formatNumber } from '../../../Commons/utils'

const UserArticleList = () => {
    const { userArticles, articleData } = useStore()
    const { user } = articleData || {}
    if (!user || !userArticles || userArticles.length === 0) {
        return null
    }
    const { userName, pic, total } = user
    return (
        <div className="user-article-list">
            <div className="user-bar">
                <img src={getUserProfileImg(pic)} />
                <div>
                    <div>
                        <a href="#">{userName}</a>
                        <a href="#">关注</a>
                    </div>
                    <p>{`总资产${formatNumber(total)}`}</p>
                </div>
            </div>
            {userArticles.map(({ articleId, title, read }) => (
                <ArticleItem key={articleId} articleId={articleId} title={title} read={read} />
            ))}
        </div>
    )
}

export default observer(UserArticleList)
