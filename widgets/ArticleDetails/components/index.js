import React from 'react'
import ArticleDetails from './Details'
import RightSection from './RightSection'
import ActionBar from './ActionBar'

const Content = () => {
    return (
        <div id="article-detail-page">
            <ActionBar />
            <ArticleDetails />
            <RightSection />
        </div>
    )
}

export default Content
