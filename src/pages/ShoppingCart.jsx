import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppContext } from "../context/contextApp";
import { useContext, useEffect, useState } from "react";
import ButtonAppBar from "../components/nav";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import Button from "@mui/material/Button";

export default function ShoppingCart() {
  const { cart, removeFromCart, increase, decrease } = useContext(AppContext);

  const [data, setData] = useState([]);

  const total = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setData(JSON.parse(localStorage.getItem("cart")));
    }
  }, [cart]);

  return (
    <>
      <ButtonAppBar />
      <TableContainer>
        <Table sx={{ maxWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Remove from cart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(data.length ? data : cart).map((item) => {
              return (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>

                  <TableCell component="th" scope="row">
                    <IconButton onClick={() => decrease(item)}>
                      <RemoveCircleOutlineRoundedIcon />
                    </IconButton>
                    {item.quantity}
                    <IconButton onClick={() => increase(item)}>
                      <AddCircleOutlineRoundedIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    {item.price * item.quantity}$
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => {
                        removeFromCart(item.id);
                        localStorage.removeItem("cart", "id");
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">Total price</TableCell>
              <TableCell scope="row">{total}</TableCell>
              <TableCell scope="row">
                <Button
                  variant="contained"
                  onClick={() =>
                    localStorage.setItem("cart", JSON.stringify(cart))
                  }
                >
                  Save
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
