import { useContext, useState } from "react";
import { DataContext } from "../context/dataprovider";
import { Box } from "@mui/material";
import Select_tab from "./select_tab";
import Form from "./Form";
import Header from "./Header";
import "./home.css";
import Response from "./response";
import { getdata } from "../service/api";
import ErrorScreen from "./error_screen";
import { checkparams } from "../utils/common-utils";
import SnackBar from "./SnackBar";
const Home = () => {
  const [error, seterror] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  const [apiresponse, setapiresponse] = useState("");
  const [errorresponse, seterrorresponse] = useState(false);
  const { formdata, jsontext, paramdata, headerdata } = useContext(DataContext);
  const onsendclick = async () => {
    // console.log(formdata);
    if (
      !checkparams(formdata, jsontext, paramdata, headerdata, seterrormessage)
    ) {
      seterror(true);
      return false;
    }

    let response = await getdata(formdata, jsontext, paramdata, headerdata);

    if (response === "error") {
      seterrorresponse(true);
      return;
    }
       seterrorresponse(false);
    setapiresponse(response.data);
  };

  return (
    <>
      <Header />
      <Box className="form-wrapper">
        <Form onsendclick={onsendclick} />
        <Select_tab />
        {/* <Response/> */}
        {/* <ErrorScreen /> */}
        {errorresponse ? <ErrorScreen/> : <Response data = {apiresponse}/>}
        {error && (
          <SnackBar
            error={error}
            seterror={seterror}
            errormessage={errormessage}
          />
        )}
      </Box>
    </>
  );
};
export default Home;
