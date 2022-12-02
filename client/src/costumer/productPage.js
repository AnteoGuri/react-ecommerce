import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
import "../style/prodpage.css";
import BuyerNav from "./buyernav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductPage(props) {
  const { id } = useParams();
  const userId = props.id;
  const [items, setItems] = useState([]);
  const prodID = JSON.stringify(id);
  const [addCart, setAddCart] = useState(false);
  const [rating, setRating] = useState();
  const navigate = useNavigate();

  const [cartCount, setcartCount] = useState([]);

  const addToCart = () => {
    if (props.id) {
      Axios.post("http://localhost:3001/addtocart", {
        buyerid: props.id,
        productid: id,
      }).then((response) => {
        console.log(response.data);
      });
      setAddCart((current) => !current);
      setTimeout(() => {
        setAddCart((current) => !current);
      }, 5000);
    } else {
      navigate("/auth");
    }
  };

  useEffect(() => {
    Axios.post("http://localhost:3001/avgrating", { id: id }).then(
      (response) => {
        console.log("rayte:");
        console.log(response.data);
        setRating(response.data[0].rating);
      }
    );
  }, [id]);

  // useEffect(()=>{
  //     Axios.post("http://localhost:3001/getcartcount", {id:userId}).then((response) => {

  //     console.log(response.data);
  //         setcartCount(response.data[0].count)

  // })
  // },[id])

  console.log(id);
  if (items.length === 0) {
    Axios.post("http://localhost:3001/getproductpage", { id: id }).then(
      (response) => {
        console.log(response.data);
        setItems(response.data);
      }
    );
  }

  const display = items.map((content) => {
    // <img className="card-image" src={`/images/${content.image}`}/>
    return (
      <div className="prod-page-container">
        <div className="prod-img-wrapper">
          {addCart ? <h3 className="add-alert">Added to cart!</h3> : ""}
          <img className="prod-page-image" src={`/images/${content.image}`} />
        </div>
        <div className="prod-info">
          <h3>{content.product_name}</h3>
          <div className="prod-star">
            <span
              class="fa fa-star "
              style={rating < 1 ? { color: "grey" } : { color: "orange" }}
            ></span>
            <span
              class="fa fa-star "
              style={rating < 2 ? { color: "grey" } : { color: "orange" }}
            ></span>
            <span
              class="fa fa-star "
              style={rating < 3 ? { color: "grey" } : { color: "orange" }}
            ></span>
            <span
              class="fa fa-star "
              style={rating < 4 ? { color: "grey" } : { color: "orange" }}
            ></span>
            <span
              class="fa fa-star "
              style={rating < 5 ? { color: "grey" } : { color: "orange" }}
            ></span>
          </div>
          <h4>{content.price}$</h4>
          <h5 className="desc-page">{content.product_description}</h5>

          <h5 className="stock-page">Stock:{content.stock}</h5>
          <button class="button-24" role="button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="prodPage">
      {console.log(items.image)}
      <BuyerNav />
      {display}
    </div>
  );
}
