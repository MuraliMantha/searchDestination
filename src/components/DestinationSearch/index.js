// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDest =>
      eachDest.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
          className="search-box"
        />
        <ul className="container">
          {searchResults.map(eachDest => (
            <DestinationItem
              name={eachDest.name}
              key={eachDest.id}
              imgUrl={eachDest.imgUrl}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
