import {Component} from 'react'

import Slider from 'react-slick'
import ShareButton from '../ShareButton'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import '../../Styles/productDetails.css'

class Productdetails extends Component {
  state = {
    productdata: [],
    productdetails: {},
    pid: '',
    imagelist: [],
    isloading: false,
    pageNumber: 1,
    resobj: {},
    pricevalue: 0,
    mrpval: 0,
  }

  componentDidMount() {
    this.fetchData()
  }

  failure = () => (
    <div>
      <h1>Connectivity is interrupted</h1>
    </div>
  )

  getmrpval = MRP => {
    const {value} = MRP
    return value
  }

  fetchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      pid: id,
    })
    console.log(id)

    this.setState({
      isloading: true,
    })
    const {pageNumber} = this.state
    const payload = {
      input: {
        page: pageNumber,
        pageSize: 10,
        filters: [],
        id: '#HomeHunts',
        entity: 'vibe',
      },
    }

    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }

    const response = await fetch(
      'https://api.furrl.in/api/v2/listing/getListingProducts',
      options,
    )
    console.log(response)
    if (response.ok) {
      const responseData = await response.json()

      const {data} = responseData
      const {getListingProducts} = data
      console.log(getListingProducts)

      this.setState({
        resobj: getListingProducts,
      })
      const {products, page} = getListingProducts

      this.setState({
        isloading: false,
        productdata: [...products],
      })
    } else {
      this.failure()
    }
    const dataproducts = () => {
      const {productdata, pid} = this.state
      const productdetail = productdata.filter(each => each.id === pid)
      if (productdetail.length !== 0) {
        this.setState({
          productdetails: {...productdetail[0]},
        })
        const {price} = productdetail[0]
        const {value} = price

        console.log(value)
        this.setState({
          pricevalue: value,
        })
        const {MRP} = productdetail[0]
        const val = this.getmrpval(MRP)
        const {images} = productdetail[0]
        this.setState({
          mrpval: val,
        })
        this.setState({
          imagelist: [...images],
        })
      } else {
        this.setState(prev => ({
          pageNumber: prev + 1,
        }))
      }
    }
    dataproducts()
  }

  render() {
    const {productdetails, mrpval, pricevalue, imagelist} = this.state
    const {
      MRP,
      id,
      brand,
      discountPercent,
      images,
      price,
      title,
      vendor,
    } = productdetails
    console.log(productdetails)

    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    }

    return (
      <div className="productdetailContainer">
        <ul className="slider-container">
          <Slider className="sliderContainer" {...settings}>
            {imagelist.map(each => (
              <img
                key={each.id}
                className="imgcoursol"
                src={each.src}
                alt="imagecourousel"
              />
            ))}
          </Slider>
        </ul>
        <div className="detailsContainer">
          <div className="titleAndshareContainer">
            <h1 className="producttitle">{title}</h1>
            <ShareButton productid={id} />
          </div>
          <div className="priceContainer">
            <p className="originalprice">Rs.{pricevalue}</p>
            <p className="mrpPrice">Rs.{mrpval}</p>
            <p className="dispercentage">{discountPercent}%</p>
          </div>
          <button type="button" className="buttonCartAdd">
            Add to cart
          </button>
        </div>
      </div>
    )
  }
}

export default Productdetails
