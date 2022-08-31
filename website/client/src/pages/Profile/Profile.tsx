import React from "react";
import { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import { styled } from "@mui/system";
import IUserInfo from "../../interfaces/IUserInfo/IUserInfo";
import ICar from "../../interfaces/ICar/ICar";
import DoneBtn from "../../components/DoneBtn/DoneBtn";

const UserInfoContainer = styled(Grid)({
  color: "black",
  overflow: "hidden",
  height: "100vh",
  padding: 8,
  my: 5,
  mx: 5,
});

function Profile() {
  const [user, setUser] = useState<IUserInfo>({
    _id: "",
    email: "",
    firstName: "",
    lastName: "",
    currentCar: null,
  });

  const [car, setCar] = useState<ICar>({
    _id: "",
    brand: "",
    price: 0,
    status: "",
    year: 0,
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
        if (res.status === 200) {
          res.json().then((data) => {
            setUser(data);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    }, []);


    useEffect(() => {
      if (user.currentCar) {
        fetch(
          `${
            process.env.NODE_ENV === "development"
              ? "http://localhost:5000"
              : "https://car-rental-website-server.vercel.app"
          }/api/cars/${user.currentCar}`,
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
            if (res.status === 200) {
              res.json().then((data) => {
                setCar(data.data)
                console.log(data);
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, [user.currentCar]);



  return (
    <UserInfoContainer>
      <Navbar />
      <Grid container my={10} mx={10}>
        <Grid item xs={12} lg={6}>
          <Typography variant="h6" component="h4">
            Email: {user.email}
            <br />
            Name: {user.firstName} {user.lastName}
          </Typography>
        </Grid>
      </Grid>
      <Grid container my={10} mx={10}>
        <Grid item xs={12} mx={"10rem"}>
          <Card sx={{
            color: "black",
          }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="h6" component="h4">
                  {car._id}
                </Typography>
                {/* <DoneBtn
      onClick={() => {
        let details: any = {
          currentCar: null,
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
            process.env.NODE_ENV === "development"
              ? "http://localhost:5000"
              : "https://car-rental-website-server.vercel.app"
          }/api/users/${userInfo._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type":
                "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: formBody,
          }
        )
          .then((res) => {
            if (res.status === 200) {
              res.json().then((data) => {
                alert("Car successfully returned");
                setUserInfo(data);
                window.location.reload();
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }}
      /> */}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </UserInfoContainer>
  );
}
{
}

export default Profile;
