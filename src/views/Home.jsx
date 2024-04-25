import pizzas from '../assets/js/pizzas.json'
console.log(pizzas)
const Home = () => {
  return (
    <header className='container-fluid p-5 text-center'>
      <h1>¡Pizzería Mamma Mía!</h1>
      <h6>¡Tenemos las mejores pizzas que podrás encontrar!</h6>
      <hr />
    </header>
  )
}

export default Home
