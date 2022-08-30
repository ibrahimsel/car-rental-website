import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

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

function Year(props: any) {
  return (
    <Autocomplete
    options={carYears}
    getOptionLabel={option => option.year}
    renderInput={params => (
      <TextField
        {...params}
        label="Year"
      />
    )}
  />
  );
}


export default Year;