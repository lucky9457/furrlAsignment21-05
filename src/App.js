import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import WishListPage from './components/WishListPage'
import Productdetails from './components/Productdetails'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/wishlist" component={WishListPage} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/productDetails/:id" component={Productdetails} />
    </Switch>
  </BrowserRouter>
)

export default App
