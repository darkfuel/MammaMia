import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { DataProvider } from '../context/Context'

const Details = () => {
  const { id } = useParams()
  const { pizzas, addPizza, pizzaDetails, setPizzaDetails } = useContext(DataProvider)
  const navigate = useNavigate()

  const getPizza = () => {
    const details = pizzas.find(item => item.id === id)
    setPizzaDetails(details)
  }

  useEffect(() => {
    getPizza()
  }, [])
  return (
    <>
      {pizzaDetails && (
        <div className='container card mt-5'>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img src={pizzaDetails.img} className='mt-4 img-fluid rounded-start' alt='' />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title text-capitalize'>{pizzaDetails.name}</h5>
                <p className='card-text'>{pizzaDetails.desc}</p>
                <div>
                  Ingredientes
                </div>
                {pizzaDetails.ingredients && pizzaDetails.ingredients.map((item) => (
                  <div className='text-capitalize' key={item.index}>
                    <FontAwesomeIcon icon={faPizzaSlice} />    {item}
                  </div>
                ))}
                <hr />
                <h3>$ {pizzaDetails.price}</h3>
                <Button className='moreButton' onClick={() => navigate('/')}>Volver</Button>
                <Button variant='danger' className='addButton' onClick={() => addPizza(pizzaDetails)}>Añadir</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Details
