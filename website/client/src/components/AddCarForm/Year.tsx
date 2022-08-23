import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const carYears = [
  { label: "2021" },
  { label: "2020" },
  { label: "2019" },
  { label: "2018" },
  { label: "2017" },
  { label: "2016" },
  { label: "2015" },
  { label: "2014" },
];

function Year() {
  return (
    <Autocomplete
      disablePortal
      id="car-Years"
      defaultValue={carYears[0]}
      options={carYears}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Year" />}
    />
  );
}


export default Year;