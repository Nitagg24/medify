import mobileImage from "../../assets/mobile.jpg";
import googlePlayImage from "../../assets/playstore.png";
import appleStoreImage from "../../assets/apple-logo.png";
import arrowImage from "../../assets/down-arr.png";
import { Box, Button, Container, Grid, InputAdornment, Stack, TextField, Typography } from "@mui/material";

const DownloadApp = () => {
  return (
    <Box sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", paddingTop: 6 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box component="img" src={mobileImage} width="100%" />
          </Grid>

          <Grid item xs={12} md={7}>
            <Box position="relative" pl={{ xs: "40px", md: "60px" }} mb={{ xs: 5, md: 0 }}>
              <Typography variant="h2" mb={3}>
                Download the
                <br />
                <Box component="span" color="#2AA7FF">
                  Medify&nbsp;
                </Box>
                App
              </Typography>

              <Box
                component="img"
                src={arrowImage}
                width={{ xs: 26, md: 42 }}
                position="absolute"
                left={0}
                top={55}
              />

              <Box mb={6}>
                <Typography fontWeight={700} mb={2}>
                  Get a link to download via SMS
                </Typography>
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    gap: 3,
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <TextField
                    sx={{
                      border: "1px solid #ECECEC",
                      flex: 1,
                    }}
                    placeholder="Phone number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          +91
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                  <Button type="submit" size="large" variant="contained" disableElevation>
                    Get Link
                  </Button>
                </Box>
              </Box>

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 3 }}
              >
                <Button
                  sx={{
                    backgroundColor: "#333",
                    color: "#fff",
                    paddingY: 1.5,
                    borderRadius: 2,
                  }}
                  size="large"
                  startIcon={<img src={googlePlayImage} height={26} />}
                  variant="contained"
                  disableElevation
                >
                  Google Play
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#333",
                    color: "#fff",
                    paddingY: 1.5,
                    borderRadius: 2,
                  }}
                  size="large"
                  startIcon={<img src={appleStoreImage} height={26} />}
                  variant="contained"
                  disableElevation
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DownloadApp;
