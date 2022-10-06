import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export default function Cards({ image, title, price, onClick, id }) {
  return (
    <Card sx={{ maxWidth: 345, height: "100%" }} key={id}>
      <CardMedia
        component="img"
        height="100%"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          {title}
        </Typography>

        <Typography variant="h6" color="text.secondary" textAlign="center">
          {price}$
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="large"
          textAlign="center"
          variant="contained"
          onClick={onClick}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
