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
    rentalHistory: [],
  });

  const [car, setCar] = useState<ICar>({
    _id: "",
    brand: "",
    price: 0,
    status: "",
    year: 0,
    licensePlate: "",
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
              setCar(data.data);
              console.log(data);
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user.currentCar]);

  const currentCarInfoText = () => {
    if (car.brand) {
      return (
        <Typography variant="h5" component="h2">
          Brand: {car.brand} <br />
          Year: {car.year} <br />
          License Plate: {car.licensePlate} <br />
          <DoneBtn
            onClick={() => {
              fetch(
                `${
                  process.env.NODE_ENV === "development"
                    ? "http://localhost:5000"
                    : "https://car-rental-website-server.vercel.app"
                }/api/users/${user._id}`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                  body: JSON.stringify({
                    currentCar: null,
                  }),
                }
              ).then((res) => {
                if (res.status === 200) {
                  res
                    .json()
                    .then((data) => {
                      setUser(data);
                      alert("You have stopped using your car");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              });

              fetch(
                `${
                  process.env.NODE_ENV === "development"
                    ? "http://localhost:5000"
                    : "https://car-rental-website-server.vercel.app"
                }/api/cars/${car._id}`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                  body: JSON.stringify({
                    status: "Available",
                  }),
                }
              ).then((res) => {
                res
                  .json()
                  .then((data) => {
                    setCar(data);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              });
            }}
          />
        </Typography>
      );
    } else {
      return (
        <Typography variant="h5" component="h2">
          You haven't rented a car yet.
        </Typography>
      );
    }
  };


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
          <Card
            elevation={20}
            sx={{
              height: "auto",
              color: "black",
            }}
          >
            <CardActionArea>
              <CardContent>{currentCarInfoText()}</CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </UserInfoContainer>
  );
}

export default Profile;
