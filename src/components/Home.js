import React from 'react'
import foodData  from '../foodData';
import Product from './Product';


const Home = () => {
  return (
    <div className='container'>
      <ul className='product-container'>
      {foodData.length > 0 && foodData.map((food) => {
        return <Product key = {food.id} food = {food}/>
      })}
      </ul>
    </div>
  )
}

export default Home