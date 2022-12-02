import Axios from 'axios';
import React , {useState} from 'react'
import '../style/seller.css';
import CloseIcon from '@mui/icons-material/Close';

function AddProdForm(props) {
  
  const[name,setName]=useState();
  const[description,setDescription]=useState();
  const[price,setPrice]=useState();
  const[image,setImage]=useState();
  const[stock,setStock]=useState();


  Axios.defaults.withCredentials=true;
  const submit= ()=>{
    
    const id=props.id;
    console.log(price)
    console.log(image)
    console.log(description)
    console.log(name)
    console.log(id);
    console.log(stock);
    Axios.post("http://localhost:3001/addproduct", 
    { name:name, id:id, price:price, image:image, description: description,stock:stock}).then((response) => {
      console.log(response);
    });
    window.location.reload(false);
 }


  

  return (props.trigger) ?(
   
<div className='popup'>

<div className='popup-inner'>
  <h1>New Product</h1>
  <CloseIcon className='close-btn' onClick={()=>
    {props.setTrigger(false)}
  }/>

  <div className='addProd-form'>
  <label for="name" id="name-label">Name: </label>
 <input type='text' id='name' onChange={(e)=>setName(e.target.value)}/> <br></br>
 <label for="description" >Description: </label>
 <textarea type='textarea' id='description' rows="4" cols="50" maxLength="300" placeholder='MAX 300 CHARACTERS!'
 onChange={(e)=>setDescription(e.target.value)}/>
 <br></br>
 <label for="price" id="price-label">Price: </label>
 <input type='number' id='price' step='any'onChange={(e)=>setPrice(e.target.value)}/>  <br></br>
 <label for="price" id="price-label">Stock: </label>
 <input type='number' id='price' onChange={(e)=>setStock(e.target.value)}/>  <br></br>
 <label for="picture" id="picture-label">Picture: </label>
 <input type='file' id="picture" onChange={(e)=>setImage(e.target.value)}/> <br></br>
 <button className='addProdBtn' onClick={submit} >Add Product</button>

  </div>
  

</div>
<img src="maxresdefault.jpg"></img>
</div>

  ) : "";
}

export default AddProdForm