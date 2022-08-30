import { AppBar, Box, Button, Container, Link, Toolbar } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

const pages = ["Home", "View cars", "Add a car", "Profile"];

const NavLink = styled(Link)({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  color: "inherit",
  "&:hover": {
    opacity: 0.4,
  },
  fontSize: "1.3rem",
});

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
            <NavLink href="/home">{pages[0]}</NavLink>
            <NavLink href="/viewcars">{pages[1]}</NavLink>
            <NavLink href="/addcar">{pages[2]}</NavLink>
            <NavLink href="/profile">{pages[3]}</NavLink>
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
