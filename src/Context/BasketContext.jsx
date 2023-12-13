import React, { createContext, useState } from 'react'
export const BasketContext = createContext()

function BasketProvider({children}) {
    const [basket, setBasket] = useState([])

    function addBasket(item){
        const elementindex =basket.findIndex(x=>x.id === item.id)
        if(elementindex ===-1){
            setBasket([...basket,{...item,count:1}])
            return
        }
        basket[elementindex].count++
        setBasket([...basket])
    }
    function increase(item){
        const elementindex =basket.findIndex(x=>x.id === item.id)
        basket[elementindex].count++
        setBasket([...basket])
    }
    function decrease(item){
        const elementindex =basket.findIndex(x=>x.id === item.id)
        if( basket[elementindex].count ===1){
            return
        }
        basket[elementindex].count--
        setBasket([...basket])
    }

    function removeItem(item){
        setBasket(basket.filter(x=>x.id !== item.id))
    }
    function getTotal(){
        return  basket.reduce((prev,x)=>prev+x.price*x.count,0).toFixed(2)
    }

  return (
    <BasketContext.Provider value={{basket,addBasket,removeItem,getTotal,increase,decrease}}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider