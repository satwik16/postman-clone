import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const Dataprovider = ({ children }) => {
  const [formdata, setformdata] = useState({ url: "", type: "POST" });
  const [paramdata, setparamdata] = useState([]);
  const [headerdata, setheaderdata] = useState([]);
  const [jsontext , setjsontext] = useState("");
  return (
    <DataContext.Provider
      value={{
        formdata,
        setformdata,
        paramdata,
        setparamdata,
        headerdata,
        setheaderdata,
        jsontext , 
        setjsontext
      }}
    >
      {" "}
      {children}{" "}
    </DataContext.Provider>
  );
};

export default Dataprovider;
