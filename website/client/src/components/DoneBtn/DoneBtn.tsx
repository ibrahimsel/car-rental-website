import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const RentingDoneBtn = styled(Button)({
    marginTop: "1rem",
    marginLeft: "1rem"
});

function DoneBtn(props: any) {
  return (
    <RentingDoneBtn onClick={props.onClick}  color="inherit" variant="outlined">
        Done
    </RentingDoneBtn>

  );
}

export default DoneBtn;