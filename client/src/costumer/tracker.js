import React from "react";
import { useState } from "react";
import Axios from "axios";
import CartProductCard from "./cartProductCard";
import "../style/tracker.css";
import { useEffect } from "react";
import TrackerProductCard from "./trackerProductCard";
import BuyerNav from "./buyernav";
import ReactPaginate from "react-paginate";
function Tracker(props) {
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (items.length === 0) {
    Axios.post("http://localhost:3001/getsentitems", { id: props.id }).then(
      (response) => {
        console.log(response.data);
        setItems(response.data);
      }
    );
  }

  const pageCount = Math.ceil(items.length / itemsPerPage);
  const displayItems = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((content) => {
      const uid = props.id;
      return (
        <div key={content.purchase_id} className="trackerproduct">
          {console.log(uid)}
          <TrackerProductCard
            image={content.image}
            price={content.price}
            stock={content.stock}
            product_name={content.product_name}
            id={content.product_id}
            description={content.product_description}
            userid={uid}
            sellerid={content.product_seller}
            status={content.status}
            dateSent={content.time_sent}
            purchid={content.purchase_id}
          />
        </div>
      );
    });

  return (
    <div>
      <BuyerNav />
      {displayItems}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={changePage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Tracker;
