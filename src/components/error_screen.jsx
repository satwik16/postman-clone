import { Typography, TextareaAutosize, Box } from "@mui/material";
import "./error_screen.css";
const ErrorScreen = () => {
  const error = "https://i.stack.imgur.com/01tZQ.png";
  return (
    <Box>
      <Typography className="heading">response </Typography>
      <Box style={{ display: "flex" }}>
        <img src={error} alt="error"  className = "error_img"/>
      </Box>
    </Box>
  );
};

export default ErrorScreen;
