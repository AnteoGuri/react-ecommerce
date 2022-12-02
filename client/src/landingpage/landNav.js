import React from "react";
import { useState } from "react";
import '../style/buyernav.css'
import { Link } from "react-router-dom";
import Axios from "axios";
function LandNav(props){

console.log(window.location.href)
const[toggle,setToggle]=useState(false)



const logout=()=>{
Axios.post("http://localhost:3001/logout", {id:props.id}).then((response) => {
  console.log(response.data);

})

}

    return(<div>
<div className="nav" style={{background:"#43ABC9",boxShadow:"rgba(0, 0, 0, 0.1) 0px 5px 15px"}}>
                  <div className="nav-left">
                  <i class='bx bxs-shopping-bag-alt nav-icon'></i>
        <div class="logo_name">Buyee</div></div>
                   <div className="nav-right">
                  <ul id="navbarr" className={toggle?"#navbarr active":"navbarr"}>
                    <li><Link to={"/"}  className={window.location.pathname==="/"?"cartLink active":"cartLink"}>Home</Link></li>
                    <li><Link to={"/"} className={window.location.pathname==="/cart"?"cartLink active":"cartLink"}>Shop</Link></li>
                    <li><Link to={"/"} className={window.location.pathname==="/tracker"?"cartLink active":"cartLink"}>Contact</Link></li>
                    <li onClick={logout}><Link to={"/"} className="cartLink">About</Link></li>
                  </ul>
                  <div className="mobile">
                    <i id="bar" className={toggle?"fa fa-times":"fa fa-bars"} onClick={()=>{
                      setToggle(current=>!current)
                    }}></i>
                   </div>
                   </div>
                  
              </div>
        
    </div>)


}

export default LandNav;