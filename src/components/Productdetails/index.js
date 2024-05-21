import {useEffect} from 'react'
import Context from '../../ReactContext/Context'
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
    <Context.Consumer>
      {value => {
        const {productsdetails} = value
        console.log(productsdetails)
        return (
          <div>
            <h1>abc</h1>
          </div>
        )
      }}
    </Context.Consumer>
  )
}

export default Productdetails
