import pizzas from '../assets/js/pizzas.json'
import Cards from '../components/Cards'

const Home = () => {
  console.log(pizzas)
  return (
    <>
      <header className='container-fluid p-5 text-center'>
        <h1>¡Pizzería Mamma Mía!</h1>
        <h6>¡Tenemos las mejores pizzas que podrás encontrar!</h6>
        <hr />
      </header>
      <div className='container-main'>
        {pizzas && pizzas.map(item => (
          <Cards
            key={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            ingredients={item.ingredients}
          />
        ))}
      </div>
    </>
  )
}

export default Home
