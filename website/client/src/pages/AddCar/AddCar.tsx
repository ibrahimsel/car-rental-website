import * as React from "react";
import { useState } from "react";
import Brand from "../../components/AddCarForm/Brand";
import Year from "../../components/AddCarForm/Year";
import Price from "../../components/AddCarForm/Price";
import Navbar from "../../components/Navbar/Navbar";
import { Grid, Button, Box } from "@mui/material";

function AddCar() {
  const [form, setForm] = useState({
    brand: "",
    year: 0,
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newCar = { ...form };
    let details: any = {
      brand: newCar.brand,
      year: newCar.year,
      price: newCar.price,
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
      }/api/cars`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          Accept: "application/x-www-form-urlencoded;charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formBody,
      }
    )
      .then((res) => {
        if (res.status === 200) {
          res.json().then(() => {
            console.log("success");
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Grid container>
      <Navbar />
      <Box component="form" onSubmit={onSubmit}>
        <Grid container mt={10}>
          <Grid item xs={3} ml={5}>
            <Brand onChange={handleChange} />
          </Grid>
          <Grid item xs={3} ml={5}>
            <Year onChange={handleChange} />
          </Grid>
          <Grid item xs={3} ml={5}>
            <Price onChange={handleChange} />
          </Grid>
          <Grid item xs={3} ml={5}>
            <Button type="submit" variant="contained" sx={{ mr: 10 }}>
              Submit Car
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default AddCar;
