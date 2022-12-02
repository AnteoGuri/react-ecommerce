import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../style/sellerDashboard.css";
import Axios from "axios";
import { useState } from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable(props) {
  const [items, setItems] = useState([]);

  if (items.length === 0) {
    Axios.post("http://localhost:3001/dashorders", { id: props.id }).then(
      (response) => {
        console.log(response.data);
        setItems(response.data);
      }
    );
  }

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Item</TableCell>

            <TableCell className="tableCell">Costumer</TableCell>
            <TableCell className="tableCell">Address</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow key={row.purchase_id}>
              <TableCell className="tableCell">{row.purchase_id}</TableCell>
              <TableCell component="th" scope="row">
                <div className="cellWrapper">
                  <img src={`/images/${row.image}`} className="image" />
                  <span className="prodName">{row.product_name}</span>
                </div>
              </TableCell>

              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.address}</TableCell>
              <TableCell className="tableCell">${row.price}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
