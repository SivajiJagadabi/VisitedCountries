import './index.css'

const VisitedCountries = props => {
  const {countryData, onRemoveCountry} = props
  const {id, name, imageUrl} = countryData

  const onClickRemoveCountry = () => {
    onRemoveCountry(id)
  }

  return (
    <li className="county-list-item">
      <img src={imageUrl} className="country-img" alt="thumbnail" />
      <div className="country-name-remove-container">
        <p style={{color: 'white', marginLeft: 12}}>{name}</p>
        <button
          type="button"
          className="remove-btn"
          onClick={onClickRemoveCountry}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
