
import { Snackbar } from "@mui/material"
const SnackBar = ({error , seterror ,errormessage})=>{
   const handleClose= ()=>{
    console.log(error);
    seterror(false);
   }
   return (

<Snackbar
  open={error}
  autoHideDuration={1600}
  onClose={handleClose}
  message={errormessage}
//   action={action}
/>

   )



}

export default SnackBar;