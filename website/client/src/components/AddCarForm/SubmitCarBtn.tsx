import React from "react";
import Button from "@mui/material/Button";

function SubmitCarBtn() {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth
      sx={{
        marginLeft: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Submit
    </Button>
  );
}

export default SubmitCarBtn;
