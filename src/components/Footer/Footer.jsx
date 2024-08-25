import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
    Link as MuiLink,
  } from "@mui/material";
  import logoImage from "../../assets/logo.png";
  import facebookIcon from "../../assets/fb.png";
  import pinterestIcon from "../../assets/pinterest.png";
  import twitterIcon from "../../assets/twitter.png";
  import youtubeIcon from "../../assets/yt.png";
  import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
  
  const Footer = () => {
    const footerLinks = [
      {
        title: "About Us",
        links: [
          "About Us",
          "Our Pricing",
          "Our Gallery",
          "Appointment",
          "Privacy Policy",
        ],
      },
      {
        title: "Services",
        links: [
          "Orthology",
          "Neurology",
          "Dental Care",
          "Opthalmology",
          "Cardiology",
        ],
      },
      {
        title: "Additional Links",
        links: [
          "About Us",
          "Our Pricing",
          "Our Gallery",
          "Appointment",
          "Privacy Policy",
        ],
      },
    ];
  
    const renderFooterLink = (text) => (
      <MuiLink underline="none" color="#fff" fontWeight={300} fontSize={14}>
        <Stack direction="row" alignItems="center" gap={0.5}>
          <KeyboardArrowRightIcon />
          {text}
        </Stack>
      </MuiLink>
    );
  
    return (
      <Box sx={{ bgcolor: "#1B3C74", py: 6 }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4.5}>
              <Stack height="100%" justifyContent="space-between" alignItems="flex-start">
                <Box
                  component="img"
                  src={logoImage}
                  height={36}
                  alt="Medify"
                  mb={2}
                  sx={{ display: "flex", alignItems: "center" }}
                />
                <Stack direction="row" spacing={1} mt={1}>
                  {[facebookIcon, twitterIcon, youtubeIcon, pinterestIcon].map((icon, index) => (
                    <Box
                      key={index}
                      component="img"
                      src={icon}
                      height={30}
                      width={30}
                      p={1}
                      sx={{
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Grid>
  
            {footerLinks.map((section, index) => (
              <Grid item xs={12} md={2.5} key={index}>
                <Stack spacing={2}>
                  {section.links.map((link, idx) => (
                    <Box key={idx}>{renderFooterLink(link)}</Box>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>
  
          <Typography
            fontWeight={300}
            color="#fff"
            fontSize={14}
            pt={3}
            mt={5}
            borderTop="1px solid rgba(255,255,255,0.1)"
          >
            Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
          </Typography>
        </Container>
      </Box>
    );
  };
  
  export default Footer;
  