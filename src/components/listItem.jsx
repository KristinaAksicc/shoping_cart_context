import React from "react";
import { TableCell, TableRow, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

export default function ListItems({
  title,
  quantity,
  remove,
  price,
  id,
  add,
  substract,
}) {
  return (
    <>
      <TableRow
        key={id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {title}
        </TableCell>

        <TableCell component="th" scope="row">
          <IconButton onClick={substract}>
            <RemoveCircleOutlineRoundedIcon />
          </IconButton>
          {quantity}
          <IconButton onClick={add}>
            <AddCircleOutlineRoundedIcon />
          </IconButton>
        </TableCell>
        <TableCell align="right">{price * quantity}$</TableCell>
        <TableCell align="right">
          <IconButton edge="end" aria-label="delete" onClick={remove}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}
