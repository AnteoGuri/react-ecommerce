import React from "react";
import "../style/sellerDashboard.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutline";

function Widget(props) {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{props.type}</span>
        <span className="counter">{props.number}</span>
        <span className="linkk">{props.link}</span>
      </div>
      <div className="rightt">{props.icon}</div>
    </div>
  );
}

export default Widget;
