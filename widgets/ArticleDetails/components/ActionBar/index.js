import React, { useCallback } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../context'
import ActionItem from './ActionItem'
import { formatNumber } from '../../../Commons/utils'

const ActionBar = () => {
    const store = useStore()
    const { articleData } = store
    const { laud = 0 } = articleData || {}
    const clickLaudButton = useCallback(() => {
        store.laudArticle()
    }, [])
    const clickRewardButton = useCallback(() => {
        store.rewardArticle()
    }, [])
    const clickMoreButton = useCallback(() => {
        store.viewMoreArticles()
    }, [])
    return (
        <div className="action-bar">
            <ActionItem title={'赞'} value={`${formatNumber(laud)}赞`} callback={clickLaudButton} />
            <ActionItem title={'赏'} value={'赞赏'} callback={clickRewardButton} />
            <ActionItem title={'更多'} value={`更多好文`} callback={clickMoreButton} />
        </div>
    )
}

export default observer(ActionBar)
