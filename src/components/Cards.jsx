import { Card, Button, CardText } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Cards = ({ pizza }) => {
  const navigate = useNavigate()
  const propetys = Object.entries(pizza.ingredients)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={pizza.img} />
      <Card.Body>
        <Card.Title className='text-capitalize'>{pizza.name}</Card.Title>
        <hr />
        <CardText>
          Ingredientes
        </CardText>
        {propetys.map((item) => (
          <CardText className='text-capitalize' key={pizza.id}>
            <FontAwesomeIcon icon={faPizzaSlice} />    {[item[1]]}
          </CardText>
        ))}
        <hr />
        <h3>$ {pizza.price}</h3>
        <Button className='moreButton' onClick={() => navigate(`/pizzas/${pizza.id}`)}>Ver Más</Button>
        <Button variant='danger' className='addButton'>Añadir</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards
