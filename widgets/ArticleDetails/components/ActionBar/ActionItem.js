/* eslint-disable react/prop-types */
import React, { memo } from 'react'

const ActionItem = ({ title, value, callback }) => {
    return (
        <div className="action-item">
            <button onClick={callback}>{title}</button>
            <p>{value}</p>
        </div>
    )
}

export default memo(ActionItem)
