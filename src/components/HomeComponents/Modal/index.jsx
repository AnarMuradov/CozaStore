import React, { useContext } from 'react'
import './style.scss'
import { BasketContext } from '../../../Context/BasketContext'
const Modal = ({item,setItem}) => {
    const {addBasket} = useContext(BasketContext)
    return (
        <>
        <div className='modalBg'>
        <div className='modal'>
            <div className='modalContainer'>
            <div className='modalImage'>
                <img src={item.thumbnail} alt="" />
            </div>
            <div className='modalInfo'>
                <h4>{item.model}</h4>
                <p className='modalPrice'>${item.price}</p>
                <p className='modelDescription'>{item.description.text}</p>
                <span>Size: </span><select name="" id="">
                    <option value="">Choose an option</option>
                    <option value="">Size S</option>
                    <option value="">Size M</option>
                    <option value="">Size L</option>
                    <option value="">Size XL</option>
                </select><br />
                <span>Color: </span><select name="" id="">
                    <option value="">Choose an option</option>
                    <option value="">Red</option>
                    <option value="">Blue</option>
                    <option value="">White</option>
                    <option value="">Grey</option>
                </select><br />
                <button onClick={()=>addBasket(item)}>Add to Basket</button>
            </div>
            </div>
            <button onClick={()=>setItem(null)} style={{backgroundColor:"red"}}>Close</button>
        </div>
        </div>
        </>
  )
}

export default Modal