import React,{useState} from 'react'
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import ViewCart from './components/VewCart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CartContext } from './components/ContextCreation';

function App() {
  const [cart,setCart] = useState([]);

  return (
    
      <CartContext.Provider value= {{cart,setCart}}>
      <BrowserRouter>
        <Header cart = {cart} />
        <Routes>
          <Route path = '/' element = {<Home />}></Route>
          <Route path = '/cart' element = {<ViewCart />}></Route>
        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
   
  );
}

export default App;
