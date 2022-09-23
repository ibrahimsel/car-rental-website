import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  marginLeft: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#37323e",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#37323e",
    opacity: 0.9,
  },
});

function SubmitCarBtn() {
  return (
    <StyledButton type="submit" variant="contained" fullWidth>
      Submit
    </StyledButton>
  );
}

export default SubmitCarBtn;
