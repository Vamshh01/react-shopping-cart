import React from 'react';
import {FiShoppingBag} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import img7 from './assets/icons8-fivem-100.png'

const Header = () => {
  const {cartItems} = useSelector ((state)=>state.cart)

  return (
   <nav>
    <img src={img7} />
    <div className='links'>
    <Link to = '/'>Home</Link>
    <Link to = '/cart'><FiShoppingBag/> 
    <p>{cartItems.length}</p>
    </Link>

    </div>
   </nav>
  )
}

export default Header