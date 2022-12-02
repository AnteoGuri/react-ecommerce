import React from "react";
import { useState } from "react";
import "../style/buyernav.css";
import { Link } from "react-router-dom";
import Axios from "axios";
function BuyerNav(props) {
  console.log(window.location.href);
  const [toggle, setToggle] = useState(false);

  const logout = () => {
    Axios.post("http://localhost:3001/logout", { id: props.id }).then(
      (response) => {
        console.log(response.data);
      }
    );
  };

  return (
    <div>
      <div className="nav">
        <div className="nav-left">
          <i class="bx bxs-shopping-bag-alt nav-icon"></i>
          <div class="logo_name">Buyee</div>
        </div>
        <div className="nav-right">
          <ul id="navbarr" className={toggle ? "#navbarr active" : "navbarr"}>
            <li>
              <Link
                to={"/home"}
                className={
                  window.location.pathname === "/home"
                    ? "cartLink active"
                    : "cartLink"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/cart"}
                className={
                  window.location.pathname === "/cart"
                    ? "cartLink active"
                    : "cartLink"
                }
              >
                Cart<span className="cartCount">77</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/tracker"}
                className={
                  window.location.pathname === "/tracker"
                    ? "cartLink active"
                    : "cartLink"
                }
              >
                Tracker
              </Link>
            </li>
            <li onClick={logout}>
              <Link to={"/"} className="cartLink">
                Logout
              </Link>
            </li>
          </ul>
          <div className="mobile">
            <i
              id="bar"
              className={toggle ? "fa fa-times" : "fa fa-bars"}
              onClick={() => {
                setToggle((current) => !current);
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerNav;
