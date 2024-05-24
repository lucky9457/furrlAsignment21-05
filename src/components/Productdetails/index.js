import {useEffect, useState} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import '../../Styles/productDetails.css'

const Productdetails = props => {
  const [productdata, setProductdata] = useState([])
  const [productdetails, setProductdetals] = useState({})
  const [pid, setPid] = useState('')
  const [imagelist, setImagelist] = useState([])
  const [isloading, setIsloading] = useState(false)
  const [pageNumber, setPagenumber] = useState(1)
  const [resobj, setResobj] = useState({})

  const failure = () => (
    <div>
      <h1>Connectivity is interrupted</h1>
    </div>
  )

  useEffect(() => {
    const fetchParams = () => {
      const {match} = props
      const {params} = match
      const {id} = params
      setPid(id)
      console.log(id)
    }
    fetchParams()

    setIsloading(true)

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

    const fetchdata = async () => {
      const response = await fetch(
        'https://api.furrl.in/api/v2/listing/getListingProducts',
        options,
      )
      console.log(response)
      if (response.ok) {
        const responseData = await response.json()

        const {data} = responseData
        const {getListingProducts} = data
        
        setResobj(getListingProducts)
        const {products, page} = getListingProducts
        setIsloading(false)
        setProductdata([...products])
      } else {
        failure()
      }
    }

    fetchdata()
  })

  
  const {totalProducts, totalPages} = resobj
  

  useEffect(() => {
    const dataproducts = () => {
      const productdetail = productdata.filter(each => each.id === pid)
      if (productdetail.length !== 0) {
        setProductdetals(...productdetail)
        const {images} = productdetail[0]
        setImagelist([...images])
      } else {
        setPagenumber(prev => prev + 1)
      }
    }
    dataproducts()
  })
  
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

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="productdetailContainer">
      <div className="slider-container">
        <hq1>s</hq1>
      </div>
    </div>
  )
}

export default Productdetails
