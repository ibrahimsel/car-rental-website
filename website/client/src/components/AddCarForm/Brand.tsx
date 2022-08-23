import * as React from "react";
import {Autocomplete, TextField} from "@mui/material";

const carBrands = [
  { label: "Honda" },
  { label: "BMW" },
  { label: "Audi" },
  { label: "Mercedes" },
  { label: "Volkswagen" },
  { label: "Renault" },
  { label: "Ford" },
  { label: "Skoda" },
];

function Brand(props: any) {
  return (
    <Autocomplete
      disablePortal
      id="car-brands"
      defaultValue={carBrands[0]}
      options={carBrands}
      onChange={props.onChange}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Brand" />}
    />
  );
}

export default Brand;