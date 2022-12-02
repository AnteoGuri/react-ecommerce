import React from "react";
import '../style/cartproductcart.css';
import CloseIcon from '@mui/icons-material/Close';
import Axios from 'axios';
import { useState } from "react";
import '../style/saleshistory.css'

function HistoryProductCard(props){
const sts=props.status;
console.log(sts)
   
function status(){
        if(sts==='sent')return true;
        else return false;
    }

 

const sent=()=>{
    Axios.post("http://localhost:3001/senditem", {id:props.purchid}).then((response) => {
        console.log(response.data);
     
})
}

    return(props.status==='recieved'?<div>
<div className="salesCard" >
    
<div className="salesPhotoWrapper">
<img className="salecard-image" src={`/images/${props.image}`}/> 
</div>
<div className="salesInfoWrapper">

<h3 className="cartname">{props.product_name}</h3>
<div className="star">
<span class="fa fa-star "style={props.rating<1?{color:"grey"}:{color:"orange"}}></span>
<span class="fa fa-star "style={props.rating<2?{color:"grey"}:{color:"orange"}}></span>
<span class="fa fa-star "style={props.rating<3?{color:"grey"}:{color:"orange"}}></span>
<span class="fa fa-star "style={props.rating<4?{color:"grey"}:{color:"orange"}}></span>
<span class="fa fa-star " style={props.rating<5?{color:"grey"}:{color:"orange"}} ></span>
</div>



<h5><span className="color">Ordered by:</span>{props.buyername}</h5>
<h5><span className="color">Order Date:</span>{props.date.slice(0,props.date.indexOf('T'))}</h5>
<h5><span className="color">Address:</span>{props.address}</h5>
<h5><span className="color">Status:</span><span className="status-red">{props.status}</span></h5>
{props.status==='sent'?<h5><span className="color">Date Sent:</span><span className="status-red">{props.sent_time.slice(0,props.sent_time.indexOf('T'))}</span></h5>:""}
{props.status==='ordered'?<button className="checkoutBtn" onClick={sent}>Mark as sent</button>:""}
{props.recieved_time?<h5><span className="color">Recieved date:</span><span className="status-red">{props.recieved_time.slice(0,props.recieved_time.indexOf('T'))}</span></h5>:""}
</div>

</div>




    </div>:"")
}

export default HistoryProductCard;