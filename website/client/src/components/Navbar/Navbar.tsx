import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const pages = ["Home", "View cars", "Add a car"];

const Navbar = () => {
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
            sx={{ flexGrow: 1, display: "flex", margin: 2 }}
          >
            <Link
              href="/home"
              sx={{
                textDecoration: "none",
                color: "inherit",
                marginRight: 2,
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
                marginRight: 2,
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
                marginRight: 2,
                "&:hover": {
                  opacity: 0.4,
                },
              }}
            >
              {pages[2]}
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
