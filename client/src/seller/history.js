import '../style/seller.css';
import React from 'react';
import {navData} from './navData';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import HistoryProductCard from './historyProductCard';
import '../style/cart.css'
import Sidebar from './sidebar';

function History(props){
const[items,setItems]=useState([]);

if(items.length === 0){
       Axios.post("http://localhost:3001/getorders", {id:props.id}).then((response) => {
                  console.log(response.data);
                setItems(response.data)
       })
   
   
       }

console.log(props.id)
    return(
<>



<Sidebar/>

<div className='sales-content'  style={{background: "#E4E9F7"}}>
{items.map(content=>{
        const uid=props.id;
        return (
              <div key={content.purchase_id} className="salesproduct" style={{background:"none"}}> 
              {console.log(uid)}
                    <HistoryProductCard 
                    image={content.image}
                    price={content.price}
                   stock={content.stock}
                   product_name={content.product_name}
                   id={content.product_id}
                   description={content.product_description}
                  userid={uid}
                  sellerid={content.product_seller}
                  buyername={content.name}
                  date={content.time_ordered}
                  status={content.status}
                  address={content.address}
                purchid={content.purchase_id}
                sent_time={content.time_sent}
                rating={content.rating}
                recieved_time={content.time_recieved}
                    />
 
               </div>
        )
 })}
</div>






       </>
    );
}

export default History;