import { useState } from "react";
import React from "react";
import "../style/productcard.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import Deleteitem from "./deleteItem";
import EditForm from "./editprod";
import { useEffect } from "react";
import Axios from "axios";

function ProductCard(props) {
  const [toggle, setToggle] = useState(false);
  const [editPopup, seteditPopup] = useState(false);
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

  return (
    <div className="card">
      <div className="icons">
        <DeleteIcon
          htmlColor="red"
          className="delete"
          fontSize="large"
          onClick={() => {
            setToggle(true);
          }}
        />

        <ModeEditIcon
          htmlColor="blue"
          className="edit"
          fontSize="large"
          onClick={() => {
            seteditPopup(true);
          }}
        />
      </div>
      <img className="card-image" src={`/images/${props.image}`} />

      <h3 className="name">{props.product_name}</h3>
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

      <h5>Price:{props.price}$</h5>
      <h5>Stock:{props.stock}</h5>

      <Deleteitem
        deletePrompt={toggle}
        setDeletePrompt={setToggle}
        id={props.id}
      />
      <EditForm
        trigger={editPopup}
        setTrigger={seteditPopup}
        id={props.id}
        name={props.product_name}
        description={props.description}
        price={props.price}
        stock={props.stock}
        image={props.image}
      />
    </div>
  );
}

export default ProductCard;
