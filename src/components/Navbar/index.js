import {Link} from 'react-router-dom'
import {IoBookmarkOutline, IoBagOutline} from 'react-icons/io5'

import '../../Styles/navbar.css'

const Navbar = () => (
  <div className="navbarContainer">
    <Link to="/" className="linkroutelogo">
      <img
        className="imagelogo"
        alt="logo"
        src="https://web.furrl.in/_next/static/media/Furrl.13550a62.svg"
      />
    </Link>

    <h1 className="navbarHeader">#Vibe Page</h1>
    <div className="wishlistAndCartIconContainer">
      <Link className="linkroute" to="/wishlist">
        <IoBookmarkOutline className="wishlisticon" />
      </Link>
      <Link to="/cart" className="linkroute">
        <IoBagOutline className="carticon" />
      </Link>
    </div>
  </div>
)

export default Navbar
