import {Link} from 'react-router-dom'
import {useState} from 'react'
import '../../Styles/productItem.css'
import {IoShareOutline} from 'react-icons/io5'
import Context from '../../ReactContext/Context'

import {BanneritemContainer} from './styledproductitem'

const ProductItem = props => {
  const {item} = props
  const [productsdetails, setProductsdetails] = useState({...item})
  const {MRP, id, brand, discountPercent, images, price, title, vendor} = item

  const clicktheitem = () => {
    setProductsdetails({...item})
  }

  return (
    <Context.Provider
      value={{
        productsdetails,
        changeProducts: clicktheitem,
      }}
    >
      <Link
        onClick={clicktheitem}
        className="linkele itembanner"
        to={`/productDetails/${id}`}
      >
        <li>
          <div className="itemcontainer">
            <BanneritemContainer
              heights={`${images[0].height}px`}
              widths={`${images[0].width}px`}
              bacsrc={images[0].src}
            >
              <button type="button" className="sharebtn">
                <IoShareOutline className="shareicon" />
              </button>
            </BanneritemContainer>
            <p className="vendor">{vendor}</p>
            <p className="title">{title}</p>
            <div className="priceContainer">
              <p className="originalprice">Rs.{price.value}</p>
              <p className="mrpPrice">Rs.{MRP.value}</p>
              <p className="discountpercentage">{discountPercent}%</p>
            </div>
          </div>
        </li>{' '}
      </Link>
    </Context.Provider>
  )
}
export default ProductItem
