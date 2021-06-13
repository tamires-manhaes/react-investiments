import { useHistory } from "react-router-dom"

const InvestimentCard = ({ id, description }) => {
  const history = useHistory()

  const handleClick = () => {
    localStorage.setItem('investmentId', id)
    localStorage.setItem('investmentName', description)
    history.push(`/investment/${id}`)
  }

  return (
    <li onClick={handleClick} className="p-2 m-2">
      <span>{description}</span>
    </li>
  )
}

export default function Investments({ founds }) {
  return (
    <ul>
      {founds && founds.map(found => (
        <InvestimentCard 
          key={found.id} 
          id={found.id} 
          description={found.description} 
        />
      ))}
    </ul>
  )
}
