import { AppBar, Box, Button, Container, Link, Toolbar } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const pages = ["Home", "View cars", "Add a car"];

const Navbar = () => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            justifyContent={"space-evenly"}
            sx={{ flexGrow: 1, display: "flex" }}
          >
            <Link
              href="/home"
              sx={{
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  opacity: 0.4,
                },
                fontSize: "1.3rem",
              }}
            >
              {pages[0]}
            </Link>
            <Link
              href="/viewcars"
              sx={{
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  opacity: 0.4,
                },
                fontSize: "1.3rem",
              }}
            >
              {pages[1]}
            </Link>
            <Link
              href="/addcar"
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "1.3rem",
                "&:hover": {
                  opacity: 0.4,
                },
              }}
            >
              {pages[2]}
            </Link>
            <Button onClick={Logout} variant="outlined" color="inherit">
              LOG OUT
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
