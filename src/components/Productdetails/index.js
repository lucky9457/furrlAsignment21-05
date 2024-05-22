import {useEffect} from 'react'

import '../../Styles/productDetails.css'

const Productdetails = props => {
  useEffect(() => {
    const fetchParams = () => {
      const {match} = props
      const {params} = match
      const {id} = params
      console.log(id)
    }
    fetchParams()
  })
  const a = 'a'
  return (
    <div className="productdetailContainer">
      <h1>Productdetails page</h1>
    </div>
  )
}

export default Productdetails
