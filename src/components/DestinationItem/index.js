// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props

  return (
    <li className="destination-item">
      <img src={imgUrl} className="image" alt={name} />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
