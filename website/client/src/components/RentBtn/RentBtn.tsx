import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const RentCarBtn = styled(Button)({
  marginTop: "1rem",
});

function RentBtn(props: any) {



  return (
    <RentCarBtn onClick={props.onClick} color="inherit" variant="outlined">
      Rent
    </RentCarBtn>
  );
}

export default RentBtn;
