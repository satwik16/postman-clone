import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { useState } from "react";
import Addrow from "./addrow";
import "./create_table.css";
const Create_table = ({ text, data, setdata }) => {
  const [rows, addrows] = useState([0]);
  return (
    <Box>
      <Typography mt={2} mb={2}>
        {text}
      </Typography>

      <Table
        sx={{ minWidth: "100%", border: "1px solid rgba(224 ,224,224   ,1)" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell className="tablecell"></TableCell>
            <TableCell className="tablecell">KEY</TableCell>
            <TableCell className="tablecell">VALUE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Addrow
              rows={rows}
              addrows={addrows}
              data={data}
              setdata={setdata}
              rowid = {index}
            />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Create_table;
