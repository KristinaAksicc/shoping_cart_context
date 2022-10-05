import * as React from "react";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppContext } from "../context/contextApp";
import { Grid } from "@mui/material";
import ButtonAppBar from "../components/nav";

export default function ProductsPage() {
  const { products, addToCart } = useContext(AppContext);

  return (
    <>
      <ButtonAppBar />
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
    </>
  );
}
