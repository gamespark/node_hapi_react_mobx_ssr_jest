/* eslint-disable react/prop-types */
import React from 'react'

const StoreContext = React.createContext()

const StoreProvider = ({ params, store, children }) => {
    if (!params && typeof window !== 'undefined') {
        const dataElement = document.querySelector('script[id="store"]')
        const data = JSON.parse(dataElement.textContent || dataElement.innerText)
        store.hydrate(data)
    }
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

const useStore = () => {
    const store = React.useContext(StoreContext)
    if (!store) {
        console.log('You have forgot to use StoreProvider, no store found!')
    }
    return store
}

export { StoreContext, StoreProvider, useStore }
