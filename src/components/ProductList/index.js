import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import ProductItem from '../ProductItem'

import '../../Styles/productlist.css'

const ProductList = () => {
  const [productdata, setProductdata] = useState([])
  const [isloading, setIsloading] = useState(false)
  const [pageNumber, setPagenumber] = useState(1)
  const [resobj, setResobj] = useState({})

  useEffect(() => {
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
      const responseData = await response.json()

      const {data} = responseData
      const {getListingProducts} = data
      console.log(getListingProducts)
      setResobj(getListingProducts)
      const {products} = getListingProducts
      setIsloading(false)
      setProductdata(prev => [...prev, ...products])
    }

    fetchdata()
  }, [pageNumber])
  console.log(resobj)
  const {totalProducts, totalPages} = resobj
  console.log(totalPages)

  const handlescroll = () => {
    const {scrollTop, scrollHeight} = document.documentElement
    const {innerHeight} = window
    console.log(scrollHeight)
    if (scrollTop + 2 + innerHeight >= scrollHeight) {
      setPagenumber(prev => prev + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handlescroll)
    return () => window.removeEventListener('scroll', handlescroll)
  }, [pageNumber])

  return (
    <div className="productlistContainer">
      <div className="headAndCountContainer">
        <h1 className="productsheading">Shop Products</h1>
        <p className="productsCount">•{totalProducts} products</p>
      </div>
      <ul className="productlistContainer">
        {productdata.map(each => (
          <ProductItem item={each} key={each.id} />
        ))}
      </ul>
      {isloading && (
        <div className="loadercontainer">
          <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </div>
      )}
    </div>
  )
}

export default ProductList
