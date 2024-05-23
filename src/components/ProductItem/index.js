import {Link} from 'react-router-dom'
import {useState} from 'react'
import '../../Styles/productItem.css'

import ShateButton from '../ShareButton'

import {BanneritemContainer} from './styledproductitem'

const ProductItem = props => {
  const {item} = props
  const [productsdetails, setProductsdetails] = useState({...item})
  const {MRP, id, brand, discountPercent, images, price, title, vendor} = item

  return (
    <li loading="lazy" className="itembanner">
      <div className="itemcontainer">
        <BanneritemContainer
          loading="lazy"
          heights={`${images[0].height}px`}
          widths={`${images[0].width}px`}
          bacsrc={images[0].src}
        >
          <ShateButton productid={id} />
        </BanneritemContainer>
        <Link className="linkele itemcontainer " to={`/productDetails/${id}`}>
          <p className="vendor">{vendor}</p>
          <p className="title">{title}</p>
          <div className="priceContainer">
            <p className="originalprice">Rs.{price.value}</p>
            <p className="mrpPrice">Rs.{MRP.value}</p>
            <p className="discountpercentage">{discountPercent}%</p>
          </div>
        </Link>
      </div>
    </li>
  )
}
export default ProductItem
