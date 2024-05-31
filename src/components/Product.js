import React,{useContext} from 'react'
import { CartContext } from './ContextCreation';

const Product = ({ food }) => {
  const {cart,setCart} = useContext(CartContext);
  const { name, image, price } = food;

  const shrinkName = (name) =>{
    return name.length > 15 ? name.substring(0,15) + '...' : name
  }

  const addCart = ()=>{
    setCart([...cart,food])
  }
  const removeCart = ()=>{
    setCart(cart.filter((item) => item.id !== food.id))
  }
  return (
    <div className='product-item'>
      <img src={image} alt={name} />
        <p>{shrinkName(name)}</p>
        <h3>{price}</h3>
        {
          cart.length > 0 && cart.includes(food) ? 
          (<button onClick={removeCart}>Remove Cart</button>) : 
          <button onClick={addCart}>Add Cart</button>
        }

    </div>
  )
}

export default Product