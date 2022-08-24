import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// const carYears = [
//   { label: "2021" },
//   { label: "2020" },
//   { label: "2019" },
//   { label: "2018" },
//   { label: "2017" },
//   { label: "2016" },
//   { label: "2015" },
//   { label: "2014" },
// ];

function Year(props: any) {
  return (
      <TextField
      id="year"
      name="year"
      label="Year"
      type="number"
      onChange={props.onChange}
      inputProps={{ maxLength: 4 }}
    />
  );
}


export default Year;