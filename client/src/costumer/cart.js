import React from "react";
import { useState } from "react";
import Axios from 'axios';
import CartProductCard from "./cartProductCard";
import'../style/cart.css'
import { useEffect } from "react";
import BuyerNav from "./buyernav";

function Cart(props){
   const[items,setItems]=useState([]);



    if(items.length === 0){
     Axios.post("http://localhost:3001/showcart", {id:props.id}).then((response) => {
                console.log(response.data);
              setItems(response.data)
     })


    }

   
    return(
      <div>
         <BuyerNav/>
        {(items.length>0)? 
          items.map(content=>{
        const uid=props.id;
        return (
          
          
              <div key={content.product_id} className="cartproduct"> 
              {console.log(uid)}
                    <CartProductCard 
                    image={content.image}
                    price={content.price}
                   stock={content.stock}
                   product_name={content.product_name}
                   id={content.product_id}
                   description={content.product_description}
                  userid={uid}
                  sellerid={content.product_seller}
                    />
 
               </div>
        )
 }):<h3>No items added to card yet.</h3>}
        </div>

    )
}

export default Cart;