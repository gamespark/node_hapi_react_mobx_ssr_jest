import React from 'react'
import RecommendArticleList from './RecommendArticleList'
import UserArticleList from './UserArticleList'

const RightSection = () => {
    return (
        <div className="right-section">
            <UserArticleList />
            <RecommendArticleList />
        </div>
    )
}

export default RightSection
