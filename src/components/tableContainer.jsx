import React from "react";
import { Table, TableContainer } from "@mui/material";
import ListItems from "./listItem";

export default function ListTable() {
  return (
    <>
      <TableContainer>
        <Table sx={{ maxWidth: 700 }} aria-label="simple table">
          <ListItems />
        </Table>
      </TableContainer>
    </>
  );
}
