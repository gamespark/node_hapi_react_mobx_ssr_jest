import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../context'
import UserItem from './UserItem'

const RecommendUserList = () => {
    const store = useStore()
    const { userData, userLoading } = store
    const { data } = userData
    return (
        <div className="recommend-user-list">
            <div className="top-bar">
                <span>推荐作者</span>
                <button disabled={userLoading} onClick={store.changeUsers}>
                    换一批
                </button>
            </div>
            {data.map(({ userId, userName, pic, total, lauds }) => (
                <UserItem key={userId} userName={userName} pic={pic} total={total} lauds={lauds} />
            ))}
        </div>
    )
}

export default observer(RecommendUserList)
