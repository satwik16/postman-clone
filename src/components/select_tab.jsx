import { Box, Tab, Tabs } from "@mui/material";
import { useState, useContext } from "react";
import { DataContext } from "../context/dataprovider";
import "./select_tab.css";
import Create_table from "./create_table";
import CreateJsonText from "./createjsontext";
const Select_Tab = () => {
  const [value, setValue] = useState(0);
  const { paramdata, setparamdata, headerdata, setheaderdata } =
    useContext(DataContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="tabs">
      <Tabs value={value} onChange={handleChange} textColor="none">
        <Tab label="Params" className="tab" />
        <Tab label="Headers" className="tab" />
        <Tab label="Body" className="tab" />
      </Tabs>
      <Box
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
      >
        <Create_table
          text={"query params"}
          data={paramdata}
          setdata={setparamdata}
        />
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        <Create_table
          text={"headers"}
          data={headerdata}
          setdata={setheaderdata}
        />
      </Box> 
      <Box
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-${2}`}
        aria-labelledby={`simple-tab-${2}`}
      >
        <CreateJsonText />
      </Box>
    </Box>
  );
};

export default Select_Tab;
