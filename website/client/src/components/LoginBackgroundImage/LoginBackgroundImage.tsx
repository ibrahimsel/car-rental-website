import React from 'react'
import LoginBg from "../../assets/images/LoginBg.jpg";
import Grid from "@mui/material/Grid";
function LoginBackgroundImage() {
  return (
    <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${LoginBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
  )
}

export default LoginBackgroundImage