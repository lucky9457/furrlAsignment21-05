import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import '../../Styles/wishlistpage.css'

const WishListPage = () => (
  <div className="wishlistCont">
    <img
      src="https://furrl.in/_next/static/media/emptyWishlist.c12c0656.svg"
      alt="wishlistempty"
      className="imageEmptyWishlist"
    />
    <h1 className="headWishlist">Looks like your wishes is empty</h1>
    <Link className="wishlistLinkHome" to="/">
      <button type="button" className="wishlistButton">
        Go to Homepage
      </button>
    </Link>

    <button type="button" className="wishlistButton">
      Login
    </button>
  </div>
)

export default WishListPage
