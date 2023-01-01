import renderToPage from '../index'
import Page from './page'
import './index.less'

Page().then(({ component }) => {
    renderToPage(component)
})
