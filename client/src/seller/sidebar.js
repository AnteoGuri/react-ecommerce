import React from "react";
import "../style/sidebar.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
function Sidebar() {
  const [status, setStatus] = useState(true);
  const open = () => {
    setStatus((status) => !status);
  };

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    if (screenSize.dynamicWidth < 700) {
      setStatus(false);
    }
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const logout = () => {
    Axios.post("http://localhost:3001/logout", {}).then((response) => {
      console.log(response.data);
    });
  };

  // let sidebar = document.querySelector(".sidebar");
  // let closeBtn = document.querySelector("#btn");
  // let searchBtn = document.querySelector(".bx-search");

  // closeBtn.addEventListener("click", ()=>{
  //   sidebar.classList.toggle("open");
  //   menuBtnChange();
  // });

  // function menuBtnChange() {
  //  if(sidebar.classList.contains("open")){
  //    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  //  }else {
  //    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
  //  }
  // }

  return (
    <>
      <div class={status ? "sidebar open" : "sidebar"}>
        <div class="logo-details">
          <i class="bx bxs-shopping-bag-alt icon"></i>
          <div class="logo_name">Buyee</div>
          <i
            class={status ? "bx bx-menu-alt-right" : "bx bx-menu"}
            id="btn"
            onClick={open}
          ></i>
        </div>
        <ul class="nav-list">
          <li>
            <a href="#">
              <Link to="/seller/home" className="link">
                {" "}
                <i class="bx bx-grid-alt"></i>
                <span class="links_name">Dashboard</span>
              </Link>
            </a>
            <span class="tooltip">Dashboard</span>
          </li>

          <li>
            <a href="#">
              <Link to="/seller/products" className="link">
                <i class="bx bx-cart"></i>
                <span class="links_name">Items</span>
              </Link>
            </a>
            <span class="tooltip">Items</span>
          </li>

          <li>
            <a href="#">
              <Link to="/seller/orders" className="link">
                {" "}
                <i class="bx bx-cart-alt"></i>
                <span class="links_name">Orders</span>
              </Link>
            </a>
            <span class="tooltip">Orders</span>
          </li>
          <li>
            <a href="#">
              <Link to="/seller/history" className="link">
                <i class="bx bx-spreadsheet"></i>
                <span class="links_name">History</span>
              </Link>
            </a>
            <span class="tooltip">History</span>
          </li>
          <li>
            <Link to="/" className="link" onClick={logout}>
              <i class="bx bx-log-out" id="log_out"></i>
              <span class="links_name">Log out</span>
            </Link>

            <span class="tooltip">Log out</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
