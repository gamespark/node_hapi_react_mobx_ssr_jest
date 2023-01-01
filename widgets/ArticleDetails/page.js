import Content from './components/index'
import Store from './store'
import PageRender from '../pageRender'

const Page = (props) => {
    return PageRender({ widget: Content, store: new Store(), ...props })
}
export default Page
