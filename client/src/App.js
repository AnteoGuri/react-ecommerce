import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import ConsHome from './costumer/home';
import Tracker from './costumer/tracker';


import Sales from './seller/sales';
import Home from './seller/home';
import Products from './seller/products';
import Authorize from './Authorize';
import './App.css';
import Cart from './costumer/cart'
import History from './seller/history';
import ProductPage from './costumer/productPage'
import LandingPage from './landingpage/landingPage.js'

Axios.defaults.withCredentials=true;

function App() {
  const navigate=useNavigate();
  const [id,setId] = useState("");
  const [loginStatus,setLoginStatus] = useState("");
  let i=1;

  useEffect(()=>{
    Axios.get("http://localhost:3001/login").then((response)=>{
    if(response.data.loggedIn == true)  {
    
      console.log(response.data)
      setLoginStatus(response.data.user[0].username)
      setId(response.data.user[0].user_id)
     
      //  navigate("/seller");   
  };
  
    });
},[])



  return (

    <div className="App">
   
<Routes>
  
  <Route index element={ <LandingPage />}/>
  <Route path="/auth" element={<Authorize/>}/>
  <Route path="/seller/home" element={ <Home id={id} active={"seller/home"}/>}/>
  <Route path="/seller/products" element={ <Products id={id} active={"seller/products"} />}/>
  <Route path="/seller/orders" element={ <Sales id={id}  active={"seller/orders"}/>}/>
  <Route path="/seller/orders" element={ <Sales id={id}  active={"seller/orders"}/>}/>
  <Route path="/seller/history" element={ <History id={id}  active={"seller/history"}/>}/>
  <Route path="/home" element={ <ConsHome id={id}/>}/>
  <Route path="/cart" element={<Cart id={id}/>}/>
  <Route path="/tracker" element={<Tracker id={id}/>}/>
  <Route path="/product/:id" element={<ProductPage id={id}/>}/>

  </Routes>
  
 
    </div>
  );
}

export default App;
