import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const LoadingPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        p: 5,
        bgcolor: "transparent",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <CircularProgress />
      <Typography>Loading...</Typography>
    </Box>
  );
};

export default LoadingPage;