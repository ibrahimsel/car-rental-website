import React from "react";
import { Typography, Fade } from "@mui/material";

function HomePageHeader() {
  return (
    <Fade in={true} style={{ transformOrigin: "0 0 0" }} {...{ timeout: 2000 }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{ mx: 5, my: 5, fontSize: 40 }}
      >
        We rent the cheapest yet the best cars! Hi Tom Finance!
      </Typography>
    </Fade>
  );
}

export default HomePageHeader;
