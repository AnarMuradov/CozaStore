import React from 'react'
import './style.scss'
import App from '../../components/HomeComponents/Slider'
import Categories from '../../components/HomeComponents/CategoriesSection'
import Products from '../../components/HomeComponents/Products'
const Home = () => {
  return (
    <>
    <section id='HomePage'>
    <App/>
    </section>
    <Categories/>
    <Products/>
    </>
  )
}

export default Home