import React, { useContext } from 'react'
import "./style.scss"
import { BasketContext } from '../../Context/BasketContext'
const Basket = ({setIsOpen,isOpen}) => {
    const {basket , getTotal,removeItem}  = useContext(BasketContext)

  return (
    <div id='basket' style={isOpen ? {right:"-400px"} : {right:"0px"}}>
        <div className='basketContainer'>
            <div className='basketHead'>
                <div className='basketHeadName'>
                    <h2>YOUR CART</h2>
                    <span onClick={()=>setIsOpen(!isOpen)}>X</span>
                </div>
                <div className='basketProducts'>
                    {basket.map((x)=>{
                        return(
                            <div className='basketProduct' key={x.id}>
                            <img onClick={()=>removeItem(x)} className='basketImg' src={x.images} alt="" />
                            <div className='basketProductInfo'>
                            <h4>{x.model}</h4>
                            <p>{x.count} x ${x.price}</p>
                            </div>
                            </div>
                        )
                    })

                    }
                </div>
            </div>
            <div className='basketFooter'>
                <div className='basketTotal'>
                    <p>Total:${getTotal()}</p>
                </div>
                <div className='basketButton'>
                <button>VIEW CART</button>
                <button>CHECK OUT</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Basket