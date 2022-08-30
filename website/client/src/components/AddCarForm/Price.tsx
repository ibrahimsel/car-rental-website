import {TextField, TextFieldProps} from "@mui/material/";
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
    inputProps={{ maxLength: 4, min:0 }}
/>
  );
}


export default Price;