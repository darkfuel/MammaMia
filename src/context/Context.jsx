import { createContext, useEffect, useState } from 'react'

export const DataProvider = createContext()

const ContPizza = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [cart, setCart] = useState([])
  const [pizzaDetails, setPizzaDetails] = useState({})
  const [total, setTotal] = useState(0)

  const getData = async () => {
    const res = await fetch('/pizzas.json')
    const pizzas = await res.json()
    setPizzas(pizzas)
  }

  useEffect(() => {
    getData()
  }, [])

  const addPizza = ({ id, price, name, img, desc }) => {
    const pizzaAdded = cart.find((pizza) => pizza.id === id)
    const newAdded = { id, price, name, img, desc, count: 1 }
    if (pizzaAdded !== undefined) {
      cart[cart.findIndex((pizza) => pizza.id === newAdded.id)].count++
      setCart([...cart])
    } else {
      setCart([...cart, newAdded])
    }
  }

  const upCount = (index) => {
    cart[index].count++
    setCart([...cart])
  }

  const donwCount = (index) => {
    if (cart[index].count > 1) {
      cart[index].count--
      setCart([...cart])
    } else {
      cart.splice(index, 1)
      setCart([...cart])
    }
  }

  const eraseCart = () => {
    setCart([])
  }

  return (
    <DataProvider.Provider
      value={{
        pizzas,
        addPizza,
        pizzaDetails,
        setPizzaDetails,
        cart,
        upCount,
        donwCount,
        eraseCart,
        setTotal,
        total
      }}
    >
      {children}
    </DataProvider.Provider>
  )
}

export default ContPizza
