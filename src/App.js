import './App.css'
// import { CardD } from './ui-components'
import { CardDs, NavBar, MarketingFooter } from './ui-components'

function App() {
  return (
    <div className='App'>
      <h1>neco3coffee demo</h1>
      <NavBar width={'100vw'} />
      <CardDs isPaginated itemsPerPage={3} />
      <MarketingFooter width={'100vw'} />
    </div>
  )
}

export default App
