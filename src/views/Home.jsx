import { useContext } from 'react'
import Cards from '../components/Cards'
import { DataProvider } from '../context/Context'

const Home = () => {
  const { pizzas } = useContext(DataProvider)
  return (
    <>
      <header className='container-fluid p-5 text-center shadow-lg p-5 mb-3 bg-body-tertiary rounded'>
        <h1>¡Pizzería Mamma Mía!</h1>
        <h6>¡Tenemos las mejores pizzas que podrás encontrar!</h6>
        <hr />
      </header>
      <div className='container-main g-4'>
        {pizzas && pizzas.map(item => (
          <Cards
            key={item.id}
            pizza={item}
          />
        ))}
      </div>
    </>
  )
}

export default Home
