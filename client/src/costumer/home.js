import React from "react";
import ReactPaginate from 'react-paginate';
import { useState } from "react";
import Axios from 'axios';
import '../style/buyerhome.css'
import HomeProductCard from "./homeProductCard";
import BuyerNav from "./buyernav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function ConsHome(props){
  const di=props.id
  const navigate = useNavigate();
  console.log(props.id) 
window.id = props.id;
  const [items,setItems]=useState([]);
   const [pageNumber, setPageNumber]=useState(0);

const itemsPerPage=15
const pagesVisited=pageNumber*itemsPerPage;

const nav=()=>{
  navigate("/")
}
   
   
    if(items.length === 0){
        Axios.post("http://localhost:3001/showproducts", {id:props.id}).then((response) => {
                   console.log(response.data);
                 setItems(response.data)
        })


        }

     

      const displayItems = items.slice(pagesVisited,pagesVisited+itemsPerPage).map(content=>{
        const uid=props.id;
        return (
              <div key={content.product_id} className="product"> <br></br>
              {console.log(uid)}
                    <HomeProductCard 
                    image={content.image}
                    price={content.price}
                   stock={content.stock}
                   product_name={content.product_name}
                   id={content.product_id}
                   description={content.product_description}
                  userid={uid}
                    />
 
               </div>
        )
 })
const pageCount=Math.ceil(items.length/itemsPerPage)

const changePage= ({selected})=>{
    setPageNumber(selected)
}

    return(
        <div >
             <BuyerNav />

              
              <div className="contentt">
                {displayItems}

</div>                            
                     <ReactPaginate 
        breakLabel="..."
        nextLabel="next >"
        onPageChange={changePage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
       breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
        </div>
    )
}


export default ConsHome;