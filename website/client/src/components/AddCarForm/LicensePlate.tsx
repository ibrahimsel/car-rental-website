import { TextField, TextFieldProps } from "@mui/material/";
import React from "react";

function LicensePlate(props: TextFieldProps) {
  return (
    <TextField
      required
      id="licensePlate"
      name="licensePlate"
      label="License Plate"
      placeholder="e.g. 34 ABC 68"
      type="string"
      onChange={props.onChange}
      inputProps={{ maxLength: 9 }}
      sx={{
        width: "100%",
        marginLeft: "2rem",
      }}
    />
  );
}

export default LicensePlate;
