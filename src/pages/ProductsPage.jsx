import React, { useContext } from "react";
import ButtonAppBar from "../components/nav";
import Cards from "../components/cards";
import { AppContext } from "../context/contextApp";
import { Grid } from "@mui/material";

export default function ProductsPage() {
  const { products, addToCart } = useContext(AppContext);
  return (
    <>
      <ButtonAppBar />
      <Grid container sx={{ mt: 10 }}>
        {products.map((item) => {
          item.quantity = 1;
          return (
            <Cards
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              onClick={() => {
                addToCart(item);
              }}
            />
          );
        })}
      </Grid>
    </>
  );
}
