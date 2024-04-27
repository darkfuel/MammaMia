import { Routes, Route } from 'react-router-dom'
import { Home, Cart, Details, NotFound } from './views'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizzas/:id' element={<Details />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
