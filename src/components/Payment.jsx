import { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { DataProvider } from '../context/Context'

const Payment = () => {
  const [show, setShow] = useState(false)
  const { total } = useContext(DataProvider)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant='success' onClick={handleShow}>
        Realizar pago
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Advertencia!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {total > 0 ? 'Gracias por su compra!!!' : 'Por favor agregue productos'}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Payment
