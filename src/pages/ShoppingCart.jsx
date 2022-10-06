import React, { useContext, useState, useEffect } from "react";
import ButtonAppBar from "../components/nav";
import { AppContext } from "../context/contextApp";
import {
  TableBody,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import ListItems from "../components/listItem";

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
          <TableBody>
            {(data.length ? data : cart).map((item) => {
              return (
                <ListItems
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  remove={() => {
                    removeFromCart(item.id);
                    localStorage.removeItem("cart", "id");
                  }}
                  add={() => {
                    increase(item);
                  }}
                  substract={() => {
                    decrease(item);
                  }}
                />
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
