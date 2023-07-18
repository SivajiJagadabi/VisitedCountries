import './index.css'

const CountriesList = props => {
  const {countryData, countryVisited} = props
  const {name, id, isVisited} = countryData

  const onClickVisit = () => {
    countryVisited(id)
  }

  return (
    <li className="list-item">
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button className="button" type="button" onClick={onClickVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
