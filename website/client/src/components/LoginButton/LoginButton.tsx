import React from "react";
import Button from "@mui/material/Button";

interface ILoginButton {
  disabled?: boolean;
}

function LoginButton(props: ILoginButton) {
  const { disabled } = props;
  return (
    <Button
      disabled={disabled}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Login
    </Button>
  );
}

export default LoginButton;
