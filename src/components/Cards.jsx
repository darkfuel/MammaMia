import { Card, Button, CardText } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { DataProvider } from '../context/Context'

const Cards = ({ pizza }) => {
  const navigate = useNavigate()
  const { pizzas, addPizza, setPizzaDetails } = useContext(DataProvider)
  const { id } = useParams()

  const getPizza = () => {
    const details = pizzas.find(item => item.id === id)
    setPizzaDetails(details)
  }

  useEffect(() => {
    getPizza()
  }, [])

  return (
    <Card style={{ width: '18rem' }} className='shadow-lg p-3 mb-3 bg-body-tertiary rounded'>
      <Card.Img variant='top' src={pizza.img} />
      <Card.Body key={pizza.id}>
        <Card.Title className='text-capitalize'>{pizza.name}</Card.Title>
        <hr />
        <CardText>
          Ingredientes
        </CardText>
        {pizza.ingredients.map((item) => (
          <CardText className='text-capitalize' key={item.index}>
            <FontAwesomeIcon icon={faPizzaSlice} />    {item}
          </CardText>
        ))}
        <hr />
        <h3>$ {pizza.price}</h3>
        <Button className='moreButton' onClick={() => navigate(`/pizzas/${pizza.id}`)}>Ver Más</Button>
        <Button variant='danger' className='addButton' onClick={() => addPizza(pizza)}>Añadir</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards
