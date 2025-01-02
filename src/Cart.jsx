import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import img1 from './assets/iphone.webp';
import img2 from './assets/macbook.jpg';
import { addToCart, deleteFromCart } from './cartSlice.jsx';
import {HandleDecrement} from './cartSlice.jsx';
import {calculatePrice} from './cartSlice.jsx';



const Cart = () => {
  const {cartItems , subTotal , shipping , tax, total} = useSelector ((state)=>state.cart)
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch(addToCart({ id }));
    dispatch(calculatePrice());
    // Dispatch the action with the payload
  };

  const decrement = (id) => {
    dispatch(HandleDecrement(id));
    dispatch(calculatePrice());
  };

  const deleteHandler = (id)=>{
    dispatch(deleteFromCart(id))
    dispatch(calculatePrice());
  }
  
  

  
return (
    <div className="cart">
       <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
              
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>

      <aside>
        <h2>Subtotal: ${subTotal}</h2>
        <h2>Shipping:${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="Item" className="image" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
      </article>
   

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;