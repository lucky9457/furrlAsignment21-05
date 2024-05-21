import Navbar from '../Navbar'
import '../../Styles/homepage.css'
import Banner from '../Banner'
import ProductList from '../ProductList'

const Homepage = () => {
  const a = 'a'
  return (
    <div>
      <Navbar />
      <Banner />
      <ProductList />
    </div>
  )
}

export default Homepage
