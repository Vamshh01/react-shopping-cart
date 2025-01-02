import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import { Toaster } from "react-hot-toast";
import Cart from './Cart.jsx'
import "./app.scss";


const App = () => {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>

        </Routes>
    
    </Router>
    <Toaster/>
    </>
   )
}

export default App