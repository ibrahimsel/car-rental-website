import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  marginLeft: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#000",
  color: "#fff",
});

function SubmitCarBtn() {
  return (
    <StyledButton type="submit" variant="contained" fullWidth>
      Submit
    </StyledButton>
  );
}

export default SubmitCarBtn;
