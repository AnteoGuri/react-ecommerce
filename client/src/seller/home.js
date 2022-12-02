import React, { useEffect } from "react";
import { navData } from "./navData";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import "../style/sellerDashboard.css";
import Widget from "./widgets";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BasicTable from "./table";
import HomeProductCard from "../costumer/homeProductCard";
import DashItem from "./dashItem";
import { useState } from "react";
import Axios from "axios";

function Home(props) {
  const id = props.id;

  const [items, setItems] = useState([]);
  const [finished, setFinished] = useState([]);
  const [active, setActive] = useState([]);
  const [revenue, setRevenue] = useState([]);
  const [unique, setUnique] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:3001/getactive", { id: id }).then(
      (response) => {
        console.log(response.data);
        setActive(response.data[0].active);
      }
    );
  }, [id]);

  useEffect(() => {
    Axios.post("http://localhost:3001/getfinished", { id: id }).then(
      (response) => {
        console.log(response.data);
        setFinished(response.data[0].finished);
      }
    );
  }, [id]);

  useEffect(() => {
    Axios.post("http://localhost:3001/getrevenue", { id: id }).then(
      (response) => {
        console.log(response.data);
        setRevenue(response.data[0].revenue);
      }
    );
  }, [id]);

  useEffect(() => {
    Axios.post("http://localhost:3001/getunique", { id: id }).then(
      (response) => {
        console.log(response.data);
        setUnique(response.data[0].count);
      }
    );
  }, [id]);

  if (items.length === 0) {
    Axios.post("http://localhost:3001/getdashitems", { id: props.id }).then(
      (response) => {
        console.log(response.data);
        setItems(response.data);
      }
    );
  }

  const displayItems = items.map((content) => {
    const uid = props.id;
    return (
      <div key={content.product_id} className="product dash">
        {" "}
        <br></br>
        {console.log(uid)}
        <DashItem
          image={content.image}
          price={content.price}
          stock={content.stock}
          product_name={content.product_name}
          id={content.product_id}
          description={content.product_description}
          userid={uid}
        />
      </div>
    );
  });

  console.log(props.id);
  return (
    <>
      <div className="home">
        <Sidebar className="sidebar open" />
        <div className="homeContainer">
          <div className="widget-container">
            <Widget
              type="Unique buyers"
              number={unique}
              link="See all users"
              icon={
                <PersonOutlinedIcon
                  className="iccon"
                  fontSize="large"
                  style={{
                    color: "purple",
                    backgroundColor: "rgba(128,0,128,0.2)",
                  }}
                />
              }
            />
            <Widget
              type="Active Orders"
              number={active}
              link="See all active orders"
              icon={
                <ShoppingCartCheckoutIcon
                  className="iccon"
                  fontSize="large"
                  style={{
                    color: "crimson",
                    backgroundColor: "rgba(255,0,0,0.2)",
                  }}
                />
              }
            />
            <Widget
              type="Finished Orders"
              number={finished}
              link="See all finished orders"
              icon={
                <TaskAltIcon
                  className="iccon"
                  fontSize="large"
                  style={{
                    color: "blue",
                    backgroundColor: "rgba(0,0,255,0.2)",
                  }}
                />
              }
            />
            <Widget
              type="Revenue"
              number={revenue + "$"}
              link="See all sales"
              icon={
                <AttachMoneyIcon
                  className="iccon"
                  fontSize="large"
                  style={{
                    color: "green",
                    backgroundColor: "rgba(0,128,0,0.2)",
                  }}
                />
              }
            />
          </div>
          <div className="listContainer">
            <div className="listTitle">Orders</div>
            <BasicTable id={props.id} />
          </div>
          <div className="itemListContainer">
            <div className="listTitle">Items</div>
            <div className="dashItem">{displayItems}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
