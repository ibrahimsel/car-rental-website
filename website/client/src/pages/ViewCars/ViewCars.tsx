import Navbar from "../../components/Navbar/Navbar";
import RentBtn from "../../components/RentBtn/RentBtn";
import ICar from "../../interfaces/ICar/ICar";
import { useState, useEffect } from "react";
import { styled } from "@mui/system";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import IUserInfo from "../../interfaces/IUserInfo/IUserInfo";

const CarCard = styled(Card)({
  margin: "3rem",
  borderRadius: "3px",
  backgroundColor: "black",
  color: "white",
  minWidth: "15rem",
});

function ViewCars() {
  const [cars, setCars] = useState<ICar[]>([
    {
      _id: "",
      brand: "",
      price: 0,
      status: "",
      year: 0,
      licensePlate: "",
    },
  ]);

  const [userInfo, setUserInfo] = useState<IUserInfo>({
    _id: "",
    email: "",
    firstName: "",
    lastName: "",
    currentCar: "",
    rentalHistory: [],
  });

  useEffect(() => {
    fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:5000"
          : "https://car-rental-website-server.vercel.app"
      }/api/cars`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => {
        res.json().then((data) => {
          setCars(data);
        });
      })
      .then((res) => {
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
              setUserInfo(data);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }, []);

  console.log(userInfo);

  return (
    <Grid container>
      <Navbar />
      <Grid container mt={10} ml={10}>
        {cars.map((car) => {
          return (
            <Grid item xs={12} md={6} lg={4}>
              <CarCard>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" component="h4">
                      Brand: {car.brand}
                      <br />
                      Year: {car.year}
                      <br />
                      Hourly Price: {car.price}$
                      <br />
                      Rental Status: {car.status}
                      <br />
                      License Plate: {car.licensePlate}
                    </Typography>
                    <RentBtn
                      onClick={() => {
                        if (car.status === "Rented") {
                          alert("This car is already rented");
                          return;
                        }

                        if (userInfo.currentCar) {
                          alert(
                            "You already have a car rented. Release that car first"
                          );
                          return;
                        }

                        let carDetails: any = {
                          status: "Rented",
                        };
                        let carFormBody: any = [];
                        for (let property in carDetails) {
                          let encodedKey = encodeURIComponent(property);
                          let encodedValue = encodeURIComponent(
                            carDetails[property]
                          );
                          carFormBody.push(encodedKey + "=" + encodedValue);
                        }
                        carFormBody = carFormBody.join("&");
                        fetch(
                          `${
                            process.env.NODE_ENV === "development"
                              ? "http://localhost:5000"
                              : "https://car-rental-website-server.vercel.app"
                          }/api/cars/${car._id}`,
                          {
                            method: "PUT",
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded;charset=UTF-8",
                              Accept:
                                "application/x-www-form-urlencoded;charset=UTF-8",
                              Authorization: `Bearer ${localStorage.getItem(
                                "token"
                              )}`,
                            },
                            body: carFormBody,
                          }
                        )
                          .then((res) => {
                            if (res.status === 200) {
                              res.json().then((data) => {
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
                                      Authorization: `Bearer ${localStorage.getItem(
                                        "token"
                                      )}`,
                                    },
                                  }
                                )
                                  .then((res) => {
                                    res.json().then((data) => {
                                      setUserInfo(data);
                                      alert("Car rented");
                                      window.location.reload();
                                    });
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                  });
                              });
                            }
                          })
                          .catch((err) => {
                            console.log(err);
                          });

                        // -------------------
                        let details: any = {
                          currentCar:
                            userInfo.currentCar === null
                              ? car._id
                              : userInfo.currentCar,
                        };
                        let formBody: any = [];
                        for (let property in details) {
                          let encodedKey = encodeURIComponent(property);
                          let encodedValue = encodeURIComponent(
                            details[property]
                          );
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
                                "application/x-www-form-urlencoded;charset=UTF-8",
                              Accept:
                                "application/x-www-form-urlencoded;charset=UTF-8",
                              Authorization: `Bearer ${localStorage.getItem(
                                "token"
                              )}`,
                            },
                            body: formBody,
                          }
                        )
                          .then((res) => {
                            if (res.status === 200) {
                              res.json().then((data) => {
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
                                      Authorization: `Bearer ${localStorage.getItem(
                                        "token"
                                      )}`,
                                    },
                                  }
                                )
                                  .then((res) => {
                                    res.json().then((data) => {
                                      setUserInfo(data);
                                    });
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                  });
                              });
                            }
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    />
                  </CardContent>
                </CardActionArea>
              </CarCard>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default ViewCars;
