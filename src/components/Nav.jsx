import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Container, Navbar, NavbarText } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { DataProvider } from '../context/Context'

const Nav = () => {
  const { cart } = useContext(DataProvider)
  const total = cart.reduce((acum, actualValu) => acum + actualValu.price * actualValu.count, 0)
  const handlemenu = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link light'
  return (
    <Navbar variant='dark'>
      <Container>
        <Navbar.Brand><FontAwesomeIcon icon={faPizzaSlice} /></Navbar.Brand>
        <NavbarText>Pizzería Mamma Mía!!</NavbarText>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <NavLink to='/cart' className={handlemenu}>
            <FontAwesomeIcon icon={faCartShopping} /><strong>  $ {total}</strong>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav
