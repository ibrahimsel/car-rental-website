import * as React from "react";
import { useState } from "react";
import Price from "../../components/AddCarForm/Price";
import Navbar from "../../components/Navbar/Navbar";
import SubmitCarBtn from "../../components/AddCarForm/SubmitCarBtn";
import LicensePlate from "../../components/AddCarForm/LicensePlate";
import {
  Autocomplete,
  Box,
  Container,
  Grid,
  TextField,
} from "@mui/material";

export default function AddCar() {
  const carBrands = [
    { brand: "Honda" },
    { brand: "BMW" },
    { brand: "Audi" },
    { brand: "Mercedes" },
    { brand: "Volkswagen" },
    { brand: "Renault" },
    { brand: "Ford" },
    { brand: "Skoda" },
  ];

  const carYears = [
    { year: "2021" },
    { year: "2020" },
    { year: "2019" },
    { year: "2018" },
    { year: "2017" },
    { year: "2016" },
    { year: "2015" },
    { year: "2014" },
  ];

  const [form, setForm] = useState({
    brand: "",
    year: 0,
    price: 0,
    status: "Available",
    licensePlate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newCar = { ...form };
    let details: any = {
      brand: newCar.brand,
      year: newCar.year,
      price: newCar.price,
      status: newCar.status,
      licensePlate: newCar.licensePlate,
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
          res.json().then((data) => {
            alert("Car successfully added");
          });
        } else if (res.status === 400) {
          res.json().then((data) => {
            alert(data.message);
          });
        } else {
          alert("Unknown error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "#BFBDC1",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <Box component="form" onSubmit={onSubmit}>
        {/* Brand Autocomplete Field */}
        <Grid
          container
          mt={20}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={8} my={3}>
            <Autocomplete
              options={carBrands}
              getOptionLabel={(option) => option.brand}
              onChange={(event, value: any) => {
                setForm({ ...form, brand: value.brand });
              }}
              renderInput={(params) => (
                <TextField {...params} required name="brand" label="Brand" />
              )}
              sx={{
                width: "100%",
                marginLeft: "2rem",
              }}
            />
          </Grid>

          {/* Year Autocomplete Field*/}
          <Grid item xs={8} my={3}>
            <Autocomplete
              options={carYears}
              getOptionLabel={(option) => option.year}
              onChange={(event, value: any) => {
                setForm({ ...form, year: value.year });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  name="year"
                  label="Year"
                />
              )}
              sx={{
                width: "100%",
                marginLeft: "2rem",
              }}
            />
          </Grid>

          {/* Price Field */}
          <Grid item xs={8} my={3}>
            <Price onChange={handleChange} />
          </Grid>

          {/* License Plate Field */}
          <Grid item xs={8} my={3}>
            <LicensePlate onChange={handleChange} />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={8} my={3}>
            <SubmitCarBtn />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

