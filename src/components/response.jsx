import { Typography, TextareaAutosize, Box } from "@mui/material";

import "./response.css";
const Response = ({ data }) => {
  let obj = data;
  let readableobj = "{\n";
  for (let key in obj) {
    readableobj += "\t";
    readableobj +=
      typeof obj[key] === "string"
        ? `${key} : "${obj[key]}"`
        : `${key} : ${obj[key]}`;

    if (Object.keys(obj).pop() !== key.toString()) {
      readableobj += ",\n";
    }
  }
  readableobj += "\n}";
  return (
    <Box>
      <Typography className="heading">response component</Typography>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder=""
        style={{ width: 800, height: 110 }}
        className="textarea2"
        disabled="disabled"
        value={readableobj}
      />
    </Box>
  );
};

export default Response;
