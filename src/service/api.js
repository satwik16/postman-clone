import axios from "axios";
import { getheaderandparams } from "../utils/common-utils";
export const getdata = async (formdata, jsontext, paramdata, headerdata) => {
   const apitype = formdata.type.toLowerCase();
   const apiurl = formdata.url ;
   const apiheaders = getheaderandparams(headerdata); 
   const apiparams =   getheaderandparams(paramdata);
    try {
     return await axios({
         method : apitype,
         url : apiurl,
         body : jsontext,
         header : apiheaders,
         params : apiparams 
     })
  } catch (error) {
    console.log("error while calling getdata api" , error) ;
     return "error";
  
  }
};
