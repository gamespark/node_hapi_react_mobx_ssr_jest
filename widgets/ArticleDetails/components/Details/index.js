import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../context'
import UserInfo from './UserInfo'

const ArticleDetails = () => {
    const { articleData } = useStore()
    if (!articleData) {
        return null
    }
    const { title, content } = articleData
    return (
        <div className="article-details">
            <h3>{title}</h3>
            <UserInfo />
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}

export default observer(ArticleDetails)
