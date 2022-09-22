import { useEffect, useState } from "react";
import { Divider, Grid, Typography, Paper, Container } from "@mui/material";
import { styled } from "@mui/system";
import ICar from "../../interfaces/ICar/ICar";
import Navbar from "../../components/Navbar/Navbar";
import DoneBtn from "../../components/StopRenting/StopRenting";
import IUserInfo from "../../interfaces/IUserInfo/IUserInfo";

export default function Profile() {
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

  const InfoPaper = styled(Paper)({
    padding: "20px",
  });

  const currentCarInfoText = () => {
    if (car.brand) {
      return (
        <Typography variant="h6" component="h2">
          <Typography variant="h4" component="h3">
            Currently Rented Car
            <Divider />
            <br />
          </Typography>
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
                    rentalHistory: user.rentalHistory.concat(car),
                  }),
                }
              ).then((res) => {
                if (res.status === 200) {
                  res
                    .json()
                    .then((data) => {
                      setUser(data);
                      console.log(data);
                      alert("You have stopped using your car");
                      window.location.reload();
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
          You have no rented car currently
        </Typography>
      );
    }
  };

  const rentalHistoryText = () => {
    if (user.rentalHistory) {
      return (
        <Typography variant="h4" component="h3">
          Rental History
          {user.rentalHistory.map((rental) => {
            return (
              <Typography variant="h6" component="h2">
                <Divider />
                <br />
                Brand: {rental.brand} <br />
                Year: {rental.year} <br />
                License plate: {rental.licensePlate} <br />
                Price: {rental.price} <br />
                <br />
              </Typography>
            );
          })}
        </Typography>
      );
    } else {
      return (
        <Typography variant="h5" component="h2">
          No rental history yet.
        </Typography>
      );
    }
  };


  return (
    <Container>
      <Navbar />
      <Grid item mt={20}>
        <InfoPaper>{currentCarInfoText()}</InfoPaper>
      </Grid>
      <Grid item mt={10}>
        <InfoPaper>{rentalHistoryText()}</InfoPaper>
      </Grid>
      <Grid item my={10}>
        <InfoPaper>
          <Typography variant="h4" component="h5">
            Personal Information <Divider />
          </Typography>
          <Typography variant="h6" component="h5">
            <br />
            Name: {user.firstName} {user.lastName} <br />
            Email: {user.email} <br />
          </Typography>
        </InfoPaper>
      </Grid>
    </Container>
  );
}
