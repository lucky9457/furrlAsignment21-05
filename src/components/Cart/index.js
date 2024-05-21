import {Component} from 'react'

class Main extends Component {
  componentDidMount() {
    this.getapi()
  }

  getapi = async () => {
    const payload = {
      input: {
        page: 1,
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
    const responseData = await response.json()
    console.log(responseData)
  }

  render() {
    return (
      <div className="maincontainer">
        <h1>sd</h1>
      </div>
    )
  }
}

export default Main
