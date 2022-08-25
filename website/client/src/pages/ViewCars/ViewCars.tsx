import Navbar from "../../components/Navbar/Navbar";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";

console.log(process.env.NODE_ENV);

function ViewCars() {
  const [cars, setCars] = useState<any[]>([]);

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
        {cars.map((car: any) => {
          return (
            <Grid item xs={6}>
              <Card
                sx={{ my: 5, mx: 5, backgroundColor: "black", color: "white" }}
              >
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
                    <Button
                      sx={{
                        mt: 5,
                      }}
                      color="inherit"
                      variant="outlined"
                    >
                      Rent
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default ViewCars;
