import React from 'react'
import './style.scss'
const Categories = () => {
  return (
    <section id='categories'>
        <div className='categoriesContainer'>
        <div className='categoriesCard'>
            <div className='bg'></div>
            <img src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp" alt="" />
            <div className='categoriesCardContent'>
                <h1>Women</h1>
                <span>Spring 2018</span>
            </div>
        </div>
        <div className='categoriesCard'>
        <div className='bg'></div>
        <img src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp" alt="" />
            <div className='categoriesCardContent'>
                <h1>Men</h1>
                <span>Spring 2018</span>
            </div>
        </div>
        <div className='categoriesCard'>
        <div className='bg'></div>
        <img src="https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp" alt="" />
            <div className='categoriesCardContent'>
                <h1>Accessories</h1>
                <span>New Trend</span>
            </div>
        </div>
        </div>
    </section>  
  )
}

export default Categories