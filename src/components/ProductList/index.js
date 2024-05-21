import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import ProductItem from '../ProductItem'
import Tabitem from '../Tabitem'

import '../../Styles/productlist.css'

const ProductList = () => {
  const [productdata, setProductdata] = useState([])
  const [isloading, setIsloading] = useState(false)
  const [pageNumber, setPagenumber] = useState(1)
  const [resobj, setResobj] = useState({})
  const [tablist, setTablist] = useState([
    {name: 'ALL', uniqueId: '0', type: 'CATEGORY'},
  ])
  const [activetabid, setActivetabid] = useState(tablist[0].uniqueId)
  const [category, setcategory] = useState(tablist[0].type)

  const failure = () => (
    <div>
      <h1>Your connection is interrupted....</h1>
    </div>
  )

  const changeActiveTab = (id, contentType) => {
    setActivetabid(id)
    setcategory(contentType)
  }

  useEffect(() => {
    const tabpayload = {id: '#HomeHunts', entity: 'vibe'}
    const tabOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tabpayload),
    }
    const fetchTabdata = async () => {
      const tabResponse = await fetch(
        'https://api.furrl.in/api/v2/listing/getListingFilters',
        tabOptions,
      )
      console.log(tabResponse)
      const tabdata = await tabResponse.json()
      console.log(tabdata)
      const {data} = tabdata
      const {getListingFilters} = data
      const {easyFilters} = getListingFilters
      setTablist(prev => [...prev, ...easyFilters])
    }
    fetchTabdata()
  }, [activetabid])

  console.log(tablist)
  console.log(activetabid)

  useEffect(() => {
    setIsloading(true)
    let filterob
    if (activetabid === '0') {
      filterob = ''
    } else {
      filterob = {id: activetabid, type: category}
    }
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
        console.log(getListingProducts)
        setResobj(getListingProducts)
        const {products} = getListingProducts
        setIsloading(false)
        setProductdata(prev => [...prev, ...products])
      } else {
        failure()
      }
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
      <ul className="tabContainer">
        {tablist.map(each => (
          <Tabitem
            activeTabChange={changeActiveTab}
            classSelection={activetabid === each.uniqueId}
            item={each}
            key={each.uniqueId}
          />
        ))}
      </ul>
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
