import { Typography, TextareaAutosize, Box } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/dataprovider";
import "./createjsontext.css";
const CreateJsonText = () => {
  const { setjsontext } = useContext(DataContext);
  const onvaluechange = (e) => {
    setjsontext(e.target.value);
  };
  return (
    <Box>
      <Typography mt={2} mb={2}>
        JSON
      </Typography>

      <TextareaAutosize
        aria-label="empty textarea"
        placeholder=""
        style={{ width: 800, height: 50 }}
        className="textarea1"
        onChange={(e) => {
          onvaluechange(e);
        }}
      />
    </Box>
  );
};

export default CreateJsonText;
