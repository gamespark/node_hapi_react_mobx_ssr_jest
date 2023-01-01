import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../context'
import ArticleItem from './ArticleItem'

const RecommendArticleList = () => {
    const { recommendArticles } = useStore()
    if (!recommendArticles || recommendArticles.length === 0) {
        return null
    }
    return (
        <div className="recommend-article-list">
            <h5>推荐阅读</h5>
            {recommendArticles.map(({ articleId, title, read }) => (
                <ArticleItem key={articleId} articleId={articleId} title={title} read={read} />
            ))}
        </div>
    )
}

export default observer(RecommendArticleList)
