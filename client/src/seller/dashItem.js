import { useState } from "react";
import Axios from "axios";
import React from "react";
import "../style/buyerproductcard.css";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useEffect } from "react";

function DashItem(props) {
  const [addCart, setAddCart] = useState(false);
  const buyerId = props.userid;
  const [productId, setProductID] = useState(props.id);
  const [prrating, setprRating] = useState();

  useEffect(() => {
    Axios.post("http://localhost:3001/avgrating", { id: productId }).then(
      (response) => {
        console.log("rayte:");
        console.log(response.data);
        setprRating(response.data[0].rating);
      }
    );
  }, [productId]);

  const addToCart = () => {
    Axios.post("http://localhost:3001/addtocart", {
      buyerid: buyerId,
      productid: productId,
    }).then((response) => {
      console.log(response.data);
    });
    setAddCart((current) => !current);
    setTimeout(() => {
      setAddCart((current) => !current);
    }, 5000);
  };

  return (
    <div className="dash-cardd" onclick={addToCart}>
      <div className={addCart ? "addCard" : "cardHidden"}>
        <h4>Item Added To Card</h4>
      </div>
      <img className="card-image" src={`/images/${props.image}`} />
      <h5 className="name">{props.product_name}</h5>

      <div className="star">
        <span
          class="fa fa-star "
          style={prrating < 1 ? { color: "grey" } : { color: "orange" }}
        ></span>
        <span
          class="fa fa-star "
          style={prrating < 2 ? { color: "grey" } : { color: "orange" }}
        ></span>
        <span
          class="fa fa-star "
          style={prrating < 3 ? { color: "grey" } : { color: "orange" }}
        ></span>
        <span
          class="fa fa-star "
          style={prrating < 4 ? { color: "grey" } : { color: "orange" }}
        ></span>
        <span
          class="fa fa-star "
          style={prrating < 5 ? { color: "grey" } : { color: "orange" }}
        ></span>
      </div>

      <h4>${props.price}</h4>
      <h5>Stock:{props.stock}</h5>

      {/* <span class="fa fa-shopping-cart cart"></span> */}
    </div>
  );
}

export default DashItem;
