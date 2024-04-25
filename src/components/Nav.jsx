import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Container, Navbar, NavbarText } from 'react-bootstrap'

const Nav = () => {
  return (
    <Navbar variant='dark'>
      <Container>
        <Navbar.Brand><FontAwesomeIcon icon={faPizzaSlice} /></Navbar.Brand>
        <NavbarText>Pizzería Mamma Mía!!</NavbarText>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <FontAwesomeIcon icon={faCartShopping} /><strong>  $12.345</strong> 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav
