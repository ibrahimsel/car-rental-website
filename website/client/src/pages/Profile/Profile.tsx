import React from "react";
import { useEffect, useState } from "react";
import {
  Grid,
  Typography,
} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import { styled } from "@mui/system";
import IUserInfo from "../../interfaces/IUserInfo/IUserInfo";

const UserInfoContainer = styled(Grid)({
  color: "white",
  overflow: "hidden",
  height: "100vh",
  padding: 8,
  my: 5,
  mx: 5,
  background:
    "linear-gradient(90deg, rgba(73,73,184,1) 0%, rgba(0,212,255,1) 100%);",
});


function Profile() {
  const [user, setUser] = useState<IUserInfo>({
    email: "",
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:5000"
          : "https://car-rental-website-server.vercel.app"
      }/api/users/me`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        res.json().then((data) => {
          setUser(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <UserInfoContainer>
      <Navbar />
      <Grid container my={10} mx={10}>
        <Grid item xs={12}>
          <Typography variant="h6" component="h4">
            Email: {user.email}
            <br />
            Name: {user.firstName} {user.lastName}
          </Typography>
        </Grid>
      </Grid>
    </UserInfoContainer>
  );
}

export default Profile;
