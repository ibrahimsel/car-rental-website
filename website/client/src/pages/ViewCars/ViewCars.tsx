import Navbar from "../../components/Navbar/Navbar";
import RentBtn from "../../components/RentBtn/RentBtn";
import DoneBtn from "../../components/DoneBtn/DoneBtn";
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

const CarCard = styled(Card)({
  margin: "3rem",
  borderRadius: "3px",
  backgroundColor: "black",
  color: "white",
  minWidth: "15rem",
  fontFamily: "Roboto",
});

function ViewCars() {
  const [cars, setCars] = useState<ICar[]>([
    {
      _id: "",
      brand: "",
      price: 0,
      status: "",
      year: 0,
    },
  ]);

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
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                      Price: {car.price}$<br />
                      Rental Status: {car.status}
                    </Typography>
                    <RentBtn
                      onClick={() => {
                        let details: any = {
                          status: "Rented",
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
                            body: formBody,
                          }
                        )
                          .then((res) => {
                            if (res.status === 200) {
                              res.json().then((data) => {
                                console.log(car._id);
                                alert("Car successfully rented");
                                window.location.reload();
                              });
                            }
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    />
                    <DoneBtn />
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
