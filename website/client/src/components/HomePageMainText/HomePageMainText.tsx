import React from "react";
import { Typography, Fade } from "@mui/material";

function HomePageMainText() {
  return (
    <Fade in={true} style={{ transformOrigin: "0 0 0" }} {...{ timeout: 2000 }}>
      <Typography variant="body1" component="p" sx={{ fontSize: 15 }}>
        Whenever you need a car, we are here to help you. We have a wide range
        of cars for you to choose from. We have cars for every occasion. We have
        cars for every budget. We have cars for every person. We are here to
        help you find the perfect car for you.
      </Typography>
    </Fade>
  );
}

export default HomePageMainText;
