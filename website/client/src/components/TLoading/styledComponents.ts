import { alpha, styled } from "@mui/material/styles";

export const StyledDiv = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: alpha("#919EAB", 0.08),
  zIndex: 999,
}));
