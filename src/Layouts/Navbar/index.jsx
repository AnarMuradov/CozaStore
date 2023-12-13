import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import Basket from '../../components/Basket';
import { BasketContext } from '../../Context/BasketContext';
 
const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(true)
    const {basket }  = useContext(BasketContext)
    const controlNavbar = () => {
      if (window.scrollY > 30) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };
    useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }, [lastScrollY]);
  return (
    <>
    <Basket  isOpen={isOpen} setIsOpen={setIsOpen}/>
    <div className={`active ${show && "hidden"}`}>
    <nav id='NavPage'>
    <div className='navbar' >
       <div className='navbarItems'>
        <div className='navLogo'>
            <img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp" alt="" />
        </div>
        <div className='navItem'>
            <ul className='navItemList'>
                <li>Home</li>
                <li>Shop</li>
                <li>Features</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
       </div>
       <div className='navbarIcon'>
       <i className="fa-solid fa-magnifying-glass"></i>
       <i onClick={()=>setIsOpen(!isOpen)} className="fa-solid fa-cart-shopping"><sup>{basket.length ? basket.length : ""}</sup></i>
       <i className="fa-regular fa-heart"><sup>0</sup></i>
       </div>
    </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar