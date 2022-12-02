import React from "react";
import "../style/deleteItem.css";
import Axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
function Deleteitem(props) {
  const confirm = () => {
    const id = props.id;
    Axios.post("http://localhost:3001/deleteitem", { id: id }).then(
      (response) => {
        console.log(response);
      }
    );
    window.location.reload(false);
  };

  return props.deletePrompt ? (
    <div className="popup">
      <div className="popup-inner">
        <CloseIcon
          className="close-btn"
          onClick={() => {
            props.setDeletePrompt(false);
          }}
        />

        <h1 className="deleteStat">
          {" "}
          Are you sure you want to delete this item?
        </h1>
        <button className="btn" onClick={confirm}>
          Yes
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Deleteitem;
