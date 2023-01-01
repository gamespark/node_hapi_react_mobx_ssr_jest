import React from 'react'
import ArticleList from './ArticleList'
import RecommendUserList from './RecommendUserList'

const Content = () => {
    return (
        <div id="home-page">
            <ArticleList />
            <div className="right-section">
                <RecommendUserList />
            </div>
        </div>
    )
}

export default Content
