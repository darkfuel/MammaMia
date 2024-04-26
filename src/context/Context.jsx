import { createContext, useEffect, useState } from 'react'

export const DataProvider = createContext()

const ContPizza = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const getData = async () => {
    const res = await fetch('/pizzas.json')
    const pizzas = await res.json()
    setPizzas(pizzas)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <DataProvider.Provider value={{ pizzas }}>
      {children}
    </DataProvider.Provider>

  )
}

export default ContPizza
