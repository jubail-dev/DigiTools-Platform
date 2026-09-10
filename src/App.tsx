import { Suspense } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import Nav from './components/navbar/Nav'
import Statistics from './components/statistics/Statistics'
import type { ProductType } from './components/types/types'
import Products from './components/Products'

const productPromiseData = async () :Promise<ProductType[]> => {
  const response = await fetch ("/data.json")
  const data = await response.json()
  return data
}

function App() {



  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Statistics></Statistics>
      <Suspense fallback = {<h2>Loading...</h2>}>

            <Products productPromise = {productPromiseData()}></Products>

      </Suspense>
    </>
  )
}

export default App
