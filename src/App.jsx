import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Pizza, Cart, Details, NotFound } from './views'
import Nav from './components/Nav'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizzas' element={<Pizza />} />
        <Route path='/pizzas:id' element={<Details />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
