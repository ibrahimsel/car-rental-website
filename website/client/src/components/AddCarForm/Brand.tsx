import * as React from "react";
import {Autocomplete, AutocompleteProps, TextField} from "@mui/material";

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
      <TextField
      id="brand"
      name="brand"
      type="string"
      label="Brand"
      // options={carBrands}
      onChange={props.onChange}
      // renderInput={(params) => <TextField {...params} label="Brand" />}
    />
  );
}

export default Brand;