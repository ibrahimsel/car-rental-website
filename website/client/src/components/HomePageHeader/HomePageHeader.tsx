import React from "react";
import { Typography, Fade } from "@mui/material";

function HomePageHeader() {
  return (
    <Fade in={true} style={{ transformOrigin: "0 0 0" }} {...{ timeout: 2000 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        We rent the cheapest yet the best cars!
      </Typography>
    </Fade>
  );
}

export default HomePageHeader;
