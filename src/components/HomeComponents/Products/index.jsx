import React, { useEffect, useState } from 'react'
import './style.scss'
const Products = () => {
    const [api, setApi] = useState([])
   function getapi() {
    fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
    .then(res=>res.json())
    .then(data=>setApi(data))
   }
   useEffect(() => {
    getapi()
   }, [])
   

  return (
    <section id='Products'>
        <div className='productsSection'>
            <div className='ProductsContainer'>
                {api.map((x)=>{
                    return(
                        <div className='product' key={x.id}>
                        <img className="productsImg" src={x.images} alt="" />
                        <div className='prodName'>
                        <h4>{x.model}</h4>
                        <i class="fa-regular fa-heart"></i>
                        </div>
                        <p>${x.price }</p>
                        <div className='prodIcon'>
                        
                        </div>
                        </div>
                    )
                })}
            </div>

        </div>
    </section>
  )
}

export default Products