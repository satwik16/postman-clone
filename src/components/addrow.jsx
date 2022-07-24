import { TableRow, TableCell, Checkbox, TextField } from "@mui/material";

import { useState } from "react";
import "./addrow.css";
const Addrow = ({ rows, addrows, data, setdata, rowid }) => {
  const [checked, setcheck] = useState(false);
  const handlechange = (e) => {
    let result = data.filter((entry) => entry.id === Number(e.target.name))[0];
    if (!checked) {
      setcheck(true);
      addrows((rows) => [...rows, rowid]);
      result = { ...result, id: rowid, check: true };
    } else {
      setcheck(false);
      result = { ...result, id: rowid, check: false };
    
    }

    let index = data.findIndex((value) => value.id === Number(e.target.name));
    if (index === -1) {
      setdata((oldarr) => [...oldarr, result]);
    } else {
      const newarray = Object.assign([...data], {
        [index]: result,
      });

      setdata(newarray);
    }
  };
  const ontextchange = (e) => {
    let result = data.filter((entry) => entry.id === rowid)[0];
    result = { ...result, id: rowid, [e.target.name]: e.target.value };
    let index = data.findIndex((value) => value.id === rowid);
    if (index === -1) {
      setdata((oldarr) => [...oldarr, result]);
    } else {
      const newarray = Object.assign([...data], {
        [index]: result,
      });

      setdata(newarray);
    }
    // console.log(data);
  };
  return (
    <TableRow>
      <Checkbox
        checked={checked}
        size="medium"
        className="check_box"
        onChange={(e) => {
          handlechange(e);
        }}
        name={rowid}
      />

      <TableCell>
        <TextField
          size="small"
          className="text_field"
          inputProps={{
            style: { height: 30, padding: "0 5px", margin: "0px 0px" },
          }}
          name="key"
          onChange={(e) => {
            ontextchange(e);
          }}
        />
      </TableCell>
      <TableCell>
        <TextField
          size="small"
          className="text_field"
          inputProps={{
            style: { height: 30, padding: "0 5px", margin: "0px 0px" },
          }}
          name="value"
          onChange={(e) => {
            ontextchange(e);
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default Addrow;
