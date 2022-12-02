import { useState } from "react";
import Axios from "axios";
import React from "react";
import "../style/buyerproductcard.css";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomeProductCard(props) {
  const [addCart, setAddCart] = useState(false);
  const buyerId = props.userid;

  const [productId, setProductID] = useState(props.id);
  const [rating, setRating] = useState();
  const [decimal, setDecimal] = useState();
  const navigate = useNavigate();

  console.log(buyerId);
  console.log(productId);

  const addToCart = () => {
    if (buyerId) {
      Axios.post("http://localhost:3001/addtocart", {
        buyerid: buyerId,
        productid: productId,
      }).then((response) => {
        console.log(response.data);
      });
      setAddCart((current) => !current);
      setTimeout(() => {
        setAddCart((current) => !current);
      }, 8000);
    } else {
      navigate("/auth");
    }
  };

  useEffect(() => {
    Axios.post("http://localhost:3001/avgrating", { id: productId }).then(
      (response) => {
        console.log("rayte:");
        console.log(response.data);
        setRating(response.data[0].rating);
      }
    );
  }, [productId]);

  return (
    <div className="cardd">
      <div className={addCart ? "addCard" : "cardHidden"}>
        <h4>Item Added To Card</h4>
      </div>
      <Link to={"/product/" + props.id}>
        <img className="home-card-image" src={`/images/${props.image}`} />{" "}
      </Link>
      <h5 className="name">{props.product_name}</h5>

      <div className="star">
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

      <h4>${props.price}</h4>
      {/* <span class="fa fa-shopping-cart cart"></span> */}
      <div onclick={addToCart}>
        <AddShoppingCartOutlinedIcon
          className="cart"
          fontSize="small"
          onClick={addToCart}
        />
      </div>
    </div>
  );
}

export default HomeProductCard;
