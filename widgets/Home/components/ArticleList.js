import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../context'
import ArticleItem from './ArticleItem'

const ArticleList = () => {
    const store = useStore()
    const { articleData } = store
    const { data: articles, totalCount, loading } = articleData

    return (
        <div className="article-list">
            {articles.map(({ articleId, title, content, user, comments, laud, star }) => (
                <ArticleItem
                    key={articleId}
                    articleId={articleId}
                    title={title}
                    content={content}
                    user={user}
                    comments={comments}
                    laud={laud}
                    star={star}
                />
            ))}
            {articles.length < totalCount && (
                <button disabled={loading} onClick={store.loadMoreArticles}>
                    加载更多
                </button>
            )}
        </div>
    )
}

export default observer(ArticleList)
