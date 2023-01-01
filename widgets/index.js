import { hydrateRoot } from 'react-dom/client'
import './index.less'

const renderToPage = (widget) => {
    const app = document.getElementById('root')
    hydrateRoot(app, widget)
}

export default renderToPage
