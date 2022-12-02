import React from "react";
import '../style/cartproductcart.css';
import CloseIcon from '@mui/icons-material/Close';
import Axios from 'axios';
import { useState } from "react";
import '../style/saleshistory.css'

function SalesProductCard(props){
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
window.location.reload(false);
}

    return(props.status!='recieved'?<div>
<div className="salesCard" >
    
<div className="salesPhotoWrapper">
<img className="salecard-image" src={`/images/${props.image}`}/> 
</div>
<div className="salesInfoWrapper">

<h3 className="salesName">{props.product_name}</h3>




<h5><span className="color">Ordered by:</span>{props.buyername}</h5>
<h5><span className="color">Order Date:</span>{props.date.slice(0,props.date.indexOf('T'))}</h5>
<h5><span className="color">Address:</span>{props.address}</h5>
<h5><span className="color">Status:</span><span className="status-red">{props.status}</span></h5>
{props.status==='sent'?<h5><span className="color">Date Sent:</span><span className="status-red">{props.sent_time.slice(0,props.sent_time.indexOf('T'))}</span></h5>:""}
{props.status==='ordered'?<button className="checkoutBtn" onClick={sent}>Mark as sent</button>:""}

</div>

</div>




    </div>:"")
}

export default SalesProductCard;