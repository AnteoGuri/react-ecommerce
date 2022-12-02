import React from "react";
import '../style/trackerCard.css';
import CloseIcon from '@mui/icons-material/Close';
import Axios from 'axios';
import { useState } from "react";
import { yellow } from "@mui/material/colors";
import { useEffect } from "react";

function TrackerProductCard(props){
 const [address,setAdress]=useState();
 const[toggle,setToggle]=useState(false);
const [rating,setRating]=useState(0);
const [productId,setProductID]=useState(props.id)
const[prrating,setprRating]=useState() 


function starRating(nr){
    setRating(nr)
}

const submit=()=>{
    Axios.post("http://localhost:3001/rating", {id:props.purchid,rating:rating}).then((response) => {
        console.log(response.data);
        setToggle(false)

})
window.location.reload(false);

}
useEffect(()=>{
    Axios.post("http://localhost:3001/avgrating", {id:productId}).then((response) => {
        console.log("rayte:")  
    console.log(response.data);
    setprRating(response.data[0].rating)
        
})
},[productId])


const checkout=()=>{
    Axios.post("http://localhost:3001/checkout", {
        prod_id:props.id,
    user_id:props.userid,
    seller_id:props.sellerid,
     address:address
}).then((response) => {
        console.log(response.data);
      
})

}



    return(<div>
<div className="trackerCard" >
    
<div className="tracker-photoWrapper">
<img className="cartcard-image" src={`/images/${props.image}`}/> 
</div>
<div className="infoWrapper">

<h3 className="cartname">{props.product_name}</h3>

<div className="star">
<span class="fa fa-star "style={prrating<1?{color:"grey"}:{color:"orange"}}></span>
<span class="fa fa-star "style={prrating<2?{color:"grey"}:{color:"orange"}}></span>
<span class="fa fa-star "style={prrating<3?{color:"grey"}:{color:"orange"}}></span>
<span class="fa fa-star "style={prrating<4?{color:"grey"}:{color:"orange"}}></span>
<span class="fa fa-star " style={prrating<5?{color:"grey"}:{color:"orange"}} ></span>
</div>

<h4>${props.price}</h4>

{ props.dateSent ?<h5>Date sent:{
props.dateSent.slice(0,props.dateSent.indexOf('T'))}</h5>:<div></div>}
<h5>Status:<span className={props.status==="ordered"?"trackerRed":props.status==="sent"?"trackerGreen":"trackerBlue"}>{props.status}</span></h5>


{props.status==='sent'? <button className="checkoutBtn" onClick={()=>{setToggle(true)}}>Confirm order</button>:""}
</div>

</div>

  { (toggle && props.status==='sent')? <div className="rating-popup">
    <div className="rating-inner">
        <h3>Enter a rating for the recieved product:</h3>
        <CloseIcon className='close-btn' onClick={()=>
        {setToggle(false)}
    }/>
    <div className="star">
    <span class="fa fa-star rating-star "style={rating<1?{color:"grey"}:{color:"orange"}} onClick={()=>starRating(1)}></span>
    <span class="fa fa-star rating-star" style={rating<2?{color:"grey"}:{color:"orange"}} onClick={()=>starRating(2)}></span>
    <span class="fa fa-star rating-star"style={rating<3?{color:"grey"}:{color:"orange"}} onClick={()=>starRating(3)}></span>
    <span class="fa fa-star rating-star" style={rating<4?{color:"grey"}:{color:"orange"}} onClick={()=>starRating(4)}></span>
    <span class="fa fa-star rating-star" style={rating<5?{color:"grey"}:{color:"orange"}} onClick={()=>starRating(5)} ></span>
    </div>
    <button className="confirmBtn" onClick={submit}>Submit</button>
    </div>


    </div>:""}

    </div>)
}

export default TrackerProductCard;