import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './components/Cart'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import WishListPage from './components/WishListPage'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/wishlist" component={WishListPage} />
    </Switch>
  </BrowserRouter>
)

export default App
