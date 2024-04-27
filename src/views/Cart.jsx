import { useContext } from 'react'
import { DataProvider } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import Payment from '../components/Payment'

const Cart = () => {
  const navigate = useNavigate()
  const { setTotal, total, cart, upCount, donwCount, eraseCart } = useContext(DataProvider)
  const totalCart = cart.reduce(
    (acum, actualValu) => acum + actualValu.price * actualValu.count,
    0
  )
  setTotal(totalCart)

  return (
    <div className='container'>
      <h5>Detalle del Pedido</h5>
      <div className='shadow-lg p-5 mb-3 bg-body-tertiary rounded'>
        {cart.map((pizza, index) => (
          <div key={pizza.id} className='d-flex justify-content-around'>
            <div className='d-flex'>
              <img src={pizza.img} alt='' width={300} className='p-3' />
              <p className='mt-3 text-capitalize'><strong>{pizza.name}</strong></p>
            </div>
            <div className='ms-5 m-3'>
              <p>Precio :  {pizza.price}</p>
              <div className='d-flex'>
                <button className='btn btn-success' onClick={(() => upCount(index))}>+</button>
                <p>{pizza.count}</p>
                <button className='btn btn-danger' onClick={(() => donwCount(index))}>-</button>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <h2>Total: {total}</h2>
      <button className='btn btn-danger' onClick={() => eraseCart()}>Limpiar</button>
      <button className='btn btn-primary' onClick={() => navigate('/')}>Volver</button>
      <hr />
      <Payment />
    </div>
  )
}

export default Cart
