import React from 'react'
import { StoreProvider } from './context'

const PageRender = (props) => {
    return new Promise((resolve, reject) => {
        const { store, params, widget } = props
        if (params) {
            store
                .init(params)
                .then(() => {
                    const widgetElement = React.createElement(widget, null)
                    const component = React.createElement(StoreProvider, { params, store }, widgetElement)
                    resolve({
                        store,
                        component
                    })
                })
                .catch((e) => {
                    reject(e)
                })
        } else {
            const widgetElement = React.createElement(widget, null)
            const component = React.createElement(StoreProvider, { store }, widgetElement)
            resolve({
                store,
                component
            })
        }
    }).catch((e) => {
        console.log(e)
    })
}
export default PageRender
