import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='container mt-5'>
        <h1>Algo ha salido Mal!!!</h1>
        <img src='src/assets/img/error.jpg' alt='error' width='500rem' />
      </div>
      <Button onClick={() => navigate('/')}>Volver</Button>
    </>
  )
}

export default NotFound
