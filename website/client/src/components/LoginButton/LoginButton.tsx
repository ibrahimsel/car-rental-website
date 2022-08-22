import React from "react";
import Button from "@mui/material/Button";


function LoginButton() {
  return (
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      Sign In
    </Button>
  );
}

export default LoginButton;
