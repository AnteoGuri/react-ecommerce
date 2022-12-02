import React from "react";
import "../style/cartproductcart.css";
import CloseIcon from "@mui/icons-material/Close";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function CartProductCard(props) {
  const [address, setAdress] = useState();
  const [toggle, setToggle] = useState(false);
  const [productId, setProductID] = useState(props.id);
  const [rating, setRating] = useState();

  const deleteCart = () => {
    Axios.post("http://localhost:3001/deletecart", {
      id: props.id,
      userid: props.userid,
    }).then((response) => {
      console.log(response.data);
      window.location.reload(false);
    });
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

  const checkout = () => {
    Axios.post("http://localhost:3001/checkout", {
      prod_id: props.id,
      user_id: props.userid,
      seller_id: props.sellerid,
      address: address,
    }).then((response) => {
      console.log(response.data);
    });
    setToggle((toggle) => !toggle);
    window.location.reload(false);
  };

  const toggleSwitcher = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <div>
      <div className="cartCard">
        <div className="photoWrapper">
          <img className="cartcard-image" src={`/images/${props.image}`} />
        </div>
        <div className="infoWrapper">
          <CloseIcon
            className="closeicon"
            onClick={deleteCart}
            fontSize="large"
          />
          <h3 className="cartname">{props.product_name}</h3>

          <p className="description">{props.description}</p>
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
          <button className="checkoutBtn" onClick={toggleSwitcher}>
            Checkout
          </button>
        </div>
      </div>

      <div className={toggle ? "cartPopUp" : "cartpopuphidden"}>
        <div className="popup-inner">
          <h4>Please enter your address:</h4>

          <input
            type="text"
            onChange={(e) => {
              setAdress(e.target.value);
            }}
          />
          <br></br>
          <button className="confirmBtn" onClick={checkout}>
            Confirm Checkout
          </button>
          <CloseIcon className="close-btn" onClick={toggleSwitcher} />
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
