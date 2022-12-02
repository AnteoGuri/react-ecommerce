import AddProdForm from './addProdForm';
import '../style/seller.css';
import React, {useState,useEffect} from 'react';
import {navData} from './navData';
import Axios from 'axios';
import ProductCard from './productCard';
import Sidebar from './sidebar';


function Products(props){
 Axios.defaults.withCredentials=true;

 const [buttonPopup,setbuttonPopup]=useState(false);
const [data,setData]=useState([]);

 


              if(data.length === 0){
Axios.post("http://localhost:3001/showsellerproducts", {id:props.id}).then((response) => {
           console.log(response.data);
         setData(response.data)
})
}
      


        

return(
<>
      <div className='wrap-products'>
       <Sidebar className="sidebar open"/>
       
       <div className='product-content'>
<div className='adddiv'>
<img  src="/images/img_503303.png" className='addBtn product'   fontSize='large'onClick={()=>{
              setbuttonPopup(true)
       }}/> 
       {/* <AddCircleOutlineOutlinedIcon className='addBtn'   fontSize='large'onClick={()=>{
              setbuttonPopup(true)
       }}/> */}
       <h1>Add New Item</h1>
</div>


 {data && data.map(content=>{
              return (
                     <div key={content.product_id} className="product"> <br></br>
                          <ProductCard 
                          image={content.image}
                          price={content.price}
                         stock={content.stock}
                         product_name={content.product_name}
                         id={content.product_id}
                         description={content.product_description}
                          />
                          
                          
                     </div>
              )
       })} 

       

       <AddProdForm trigger={buttonPopup} setTrigger={setbuttonPopup} id={props.id}/>
    
       </div>
       </div> 
       </>

    );
}

export default Products;