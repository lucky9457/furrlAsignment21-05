import {IoShareOutline} from 'react-icons/io5'
import '../../Styles/sharebtn.css'

const ShareButton = props => {
  const {productid} = props
  const handleshare = async () => {
    try {
      await navigator.share({
        url: `${window.location}/${productid}`,
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <button onClick={handleshare} type="button" className="sharebtn">
        <IoShareOutline className="shareicon" />
      </button>
    </div>
  )
}
export default ShareButton
