import { Card, Button, CardText } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'

const Cards = ({ name, img, price, ingredients }) => {
  const propetys = Object.entries(ingredients)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title className='text-capitalize'>{name}</Card.Title>
        <hr />
        <CardText>
          Ingredientes
        </CardText>
        {propetys.map((item) => (
          <CardText className='text-capitalize' key={item.index}>
            <FontAwesomeIcon icon={faPizzaSlice} />    {[item[1]]}
          </CardText>
        ))}
        <hr />
        <h3>$ {price}</h3>
        <Button className='moreButton'>Ver Más</Button>
        <Button variant='danger' className='addButton'>Añadir</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards
