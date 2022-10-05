import React, { useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { AppContext } from "../context/contextApp";

export default function Cards() {
  const { products, addToCart } = useContext(AppContext);

  return (
    <Grid container sx={{ mt: 10 }}>
      {products.map((item) => {
        item.quantity = 1;
        return (
          <Card sx={{ maxWidth: 345, height: "100%" }} key={item.id}>
            <CardMedia
              component="img"
              height="100%"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign="center"
              >
                {item.title}
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                textAlign="center"
              >
                {item.price}$
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="large"
                textAlign="center"
                variant="contained"
                onClick={() => {
                  addToCart(item);
                }}
              >
                Add to cart
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Grid>
  );
}
