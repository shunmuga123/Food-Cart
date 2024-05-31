import React, { useState,useEffect,useContext } from 'react'

import { CartContext } from './ContextCreation';

const ViewCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0))
  }, [cart])
  const removeCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }
  return (
    <div className='viewcart'>
      <h2>Cart Products</h2>
      {cart.length > 0 && cart.map((food) =>
        <div className='viewcart-items'>
          <img src={food.image} alt={food.name} />
          <div className='cart-details'>
            <p>{food.name}</p>
            <p>Price : {food.price} </p>
            <button className='remove-btn' onClick={() => removeCart(food.id)}>Remove Cart</button>
          </div>

        </div>
      )
      }
      <h1>Total Price : {totalPrice} </h1>
    </div>
  )
}

export default ViewCart