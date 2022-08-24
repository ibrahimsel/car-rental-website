import Navbar from "../../components/Navbar/Navbar";
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

function ViewCars() {
  // get cars from server
  const [cars, setCars] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://car-rental-website-server-n7nu1kkzj-ibrahimsel.vercel.app/api/cars")
      .then((res) => {
        setCars(res.data);
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
            <Grid item xs={3}>
              <Card
                sx={{ my: 5, mx: 5, backgroundColor: "black", color: "white" }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Brand: {car.brand}
                      <br />
                      Year: {car.year}
                      <br />
                      Price: {car.price}$<br />
                    </Typography>
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
