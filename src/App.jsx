import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Pizza, Cart, Details, NotFound } from './views'

const App = () => {
  return (
    <BrowserRouter>
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
