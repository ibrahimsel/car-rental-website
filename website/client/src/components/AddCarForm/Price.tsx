import { TextField, TextFieldProps } from "@mui/material/";
function Price(props: TextFieldProps) {
  return (
    <TextField
      required
      id="price"
      name="price"
      label="Price $ (Hourly)"
      placeholder="e.g. 30"
      type="number"
      onChange={props.onChange}
      inputProps={{ min: 0, max: 999 }}
    />
  );
}

export default Price;
