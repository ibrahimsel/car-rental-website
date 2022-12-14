import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import LoginBackgroundImage from "../../components/LoginBackgroundImage/LoginBackgroundImage";
import LoginButton from "../../components/LoginButton/LoginButton";
import Copyright from "../../components/Copyright/Copyright";
import { useNavigate } from "react-router-dom";
import { useTomSuspense } from "../../context";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { disabled, tomSuspense } = useTomSuspense();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newPerson = { ...form };
    tomSuspense(true);
    let details: any = {
      email: newPerson.email,
      password: newPerson.password,
    };
    let formBody: any = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch(
      `${
        process.env.NODE_ENV === "production"
          ? "https://car-rental-website-server.vercel.app"
          : "http://localhost:5000"
      }/api/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Accept: "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formBody,
      }
    )
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            localStorage.setItem("token", data.token);
            navigate("/home");
          });
        } else {
          alert("Invalid credentials");
        }
      })
      .finally(() => {
        tomSuspense(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <LoginBackgroundImage />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              disabled={disabled}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              disabled={disabled}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <LoginButton disabled={disabled} />
            <Grid container justifyContent={"center"}>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
