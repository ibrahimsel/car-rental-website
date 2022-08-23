import {TextField, TextFieldProps} from "@mui/material/";
function Price(props: TextFieldProps) {
  return (
    <TextField
    required
    id="price"
    label="Price $ (Hourly)"
    placeholder="e.g. 30"
    type="number"
    onChange={props.onChange}
    inputProps={{ maxLength: 4 }}
/>
  );
}


export default Price;