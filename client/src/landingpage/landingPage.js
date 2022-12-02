import React from "react";
import LandNav from "./landNav";
import "../style/landpage.css";
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import HomeProductCard from "../costumer/homeProductCard";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const [items, setItems] = useState([]);
  const [newestItems, setnewestItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.post("http://localhost:3001/bestsellers", {}).then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.post("http://localhost:3001/newestitems", {}).then((response) => {
      console.log(response.data);
      setnewestItems(response.data);
    });
  }, []);

  const start = () => {
    navigate("/auth");
  };

  const displayNewItems = newestItems.map((content) => {
    return (
      <div key={content.product_id} className="product">
        {" "}
        <br></br>
        <HomeProductCard
          image={content.image}
          price={content.price}
          stock={content.stock}
          product_name={content.product_name}
          id={content.product_id}
          description={content.product_description}
        />
      </div>
    );
  });

  const displayItems = items.map((content) => {
    return (
      <div key={content.product_id} className="product">
        {" "}
        <br></br>
        <HomeProductCard
          image={content.image}
          price={content.price}
          stock={content.stock}
          product_name={content.product_name}
          id={content.product_id}
          description={content.product_description}
        />
      </div>
    );
  });

  return (
    <div className="largeDiv">
      <div className="landingNav">
        <LandNav />
      </div>
      <div className="landingContainer">
        <div className="hero">
          <div className="landInfo">
            <h4 className="h4">Free Shipping</h4>
            <h2 className="h2">Dream Setup Gear</h2>
            <h1 className="h1">Highest Quality</h1>
            <button className="get-started-btn" onClick={start}>
              Get Started
            </button>
          </div>
          <div className="slideContainer"></div>
        </div>

        <div className="bestsellers">
          <h3 style={{ color: "white" }}>Best Sellers</h3>
          <div className="bestSellerItems">{displayItems}</div>
        </div>
        <div className="bestsellers">
          <h3 style={{ color: "white" }}>Newest Additions</h3>
          <div className="bestSellerItems">{displayNewItems}</div>
        </div>
        <div className="footer">
          <div className="col1">
            <h5 style={{ fontWeight: "600", color: "white" }}>Contact</h5>
            <p>
              <span style={{ fontWeight: "700" }}>Address:</span>Lorem ipsum
              dolor sit amet, consectetur
            </p>
            <p>
              <span style={{ fontWeight: "700" }}>Phone:</span>0699999999
            </p>
            <h5 style={{ fontWeight: "600", color: "white" }}>Follow Us</h5>
            <div className="social-logos">
              <FacebookIcon fontSize="medium" />
              <TwitterIcon fontSize="medium" />
              <RedditIcon fontSize="medium" />
              <InstagramIcon fontSize="medium" />
            </div>
          </div>
          <div className="col2">
            <h5 style={{ fontWeight: "600", color: "white" }}>About</h5>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
          </div>
          <div className="col3">
            <h5 style={{ fontWeight: "600", color: "white" }}>My Account</h5>
            <p>Sign in</p>
            <p>View Cart</p>
            <p>Track my order</p>
            <p>Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
