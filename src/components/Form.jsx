import { Box, Select, MenuItem, TextField, Button } from "@mui/material";
import "./form.css";
// import Select_tab from "./select_tab";
import { useContext } from "react";
import { DataContext } from "../context/dataprovider";
const Form = ({onsendclick}) => {
  const { formdata, setformdata } = useContext(DataContext);
  const handlechange = (e) => {
        // console.log(formdata);
    setformdata({...formdata , type : e.target.value});

  }

  const onurlchange = (e)=>{
    // console.log(formdata);

    setformdata({...formdata , url  : e.target.value});


  }
  return (
    <Box className="box">
      <Select
        value={formdata.type}
        label="POST"
        // onChange={handleChange}
        className="dropdown"
        onChange = {(e)=>handlechange(e)}
      >
        <MenuItem value={"POST"}>POST</MenuItem>
        <MenuItem value={"GET"}>GET</MenuItem>
      </Select>
      <TextField size="small" className="textarea" onChange = {(e)=> onurlchange(e)}/>
      <Button variant="contained" className="button" onClick = { ()=>onsendclick()}>
        Send
      </Button>
      {/* <Select_tab/> */}
    </Box>
  );
};

export default Form;
