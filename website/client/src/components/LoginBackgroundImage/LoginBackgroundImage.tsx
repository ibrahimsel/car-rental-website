import React from "react";
import LoginBg from "../../assets/images/LoginBg.jpg";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";

const LoginBackGround = styled(Grid)({
  backgroundImage: `url(${LoginBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

function LoginBackgroundImage() {
  return <LoginBackGround item xs={false} sm={4} md={7} />;
}

export default LoginBackgroundImage;
