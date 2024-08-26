import {
  Box,
  Container,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import navStyles from "./NavBar.module.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Box p={1} bgcolor="primary.main">
        <Typography fontSize={14} textAlign="center" color="#fff">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <Link to="/">
            <img src={logo} alt="Logo" height={27} />
          </Link>

          {!isMobile && (
            <Stack direction="row" spacing={4} alignItems="center">
              <Link className={navStyles.navLink} >Find Doctors</Link>
              <Link className={navStyles.navLink} to="/search">Hospitals</Link>
              <Link className={navStyles.navLink} >Medicines</Link>
              <Link className={navStyles.navLink} >Surgeries</Link>
              <Link className={navStyles.navLink} >Software for Provider</Link>
              <Link className={navStyles.navLink} >Facilities</Link>
              <Link to="/bookings">
                <Button variant="contained" disableElevation>
                  My Bookings
                </Button>
              </Link>
            </Stack>
          )}

          {isMobile && (
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>

      {isMobile && (
        <Box
          className={`${navStyles.mobileMenu} ${menuOpen ? navStyles.show : ''}`}
        >
          <IconButton onClick={() => setMenuOpen(false)} className={navStyles.closeButton}>
            <CloseIcon />
          </IconButton>
          <Stack direction="column" spacing={4} alignItems="flex-start" className={navStyles.mobileMenuItems}>
            <Link className={navStyles.navLink} to="/find-doctors">Find Doctors</Link>
            <Link className={navStyles.navLink} to="/hospitals">Hospitals</Link>
            <Link className={navStyles.navLink} to="/medicines">Medicines</Link>
            <Link className={navStyles.navLink} to="/surgeries">Surgeries</Link>
            <Link className={navStyles.navLink} to="/provider-software">Software for Provider</Link>
            <Link className={navStyles.navLink} to="/facilities">Facilities</Link>
            <Link to="/bookings">
              <Button variant="contained" disableElevation>
                My Bookings
              </Button>
            </Link>
          </Stack>
        </Box>
      )}
    </header>
  );
}
