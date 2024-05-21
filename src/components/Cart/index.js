import {Link} from 'react-router-dom'
import '../../Styles/cartstyles.css'

const Cart = () => (
  <div className="cartContainer">
    <img
      src="https://furrl.in/_next/static/media/emptyBag.317aed26.svg"
      alt="cartemptylogo"
      className="cartemptyImage"
    />
    <h1 className="cartheading">Looks like your bag is empty</h1>
    <Link className="cartLink" to="/">
      <button type="button" className="cartbtn1">
        Continue Shopping
      </button>
    </Link>
    <button type="button" className="cartbtn2">
      Login
    </button>
  </div>
)
export default Cart
