import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../../assets/home.webp";

const HeroSlide = ({
  title,
  highlight,
  description,
  buttonText,
  buttonLink,
  image,
}) => {
  return (
    <SwiperSlide>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        alignItems="center"
        justifyContent={{ xs: "center", md: "space-between" }} 
        pt={2}
        sx={{ width: "100%", maxWidth: "1200px", mx: "auto", px: 2 }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            order: { xs: 2, md: 1 }, 
            maxWidth: "500px",
          }}
        >
          <Typography variant="h3" component="h1">
            {title}
          </Typography>
          <Typography variant="h1" component="h1" mb={1}>
            {highlight.preText}{" "}
            <span style={{ color: "#2AA7FF" }}>{highlight.text}</span>
          </Typography>
          <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3}>
            {description}
          </Typography>
          <Link to={buttonLink}>
            <Button variant="contained" size="large" disableElevation>
              {buttonText}
            </Button>
          </Link>
        </Box>
        <Box
          component="img"
          src={image}
          width={{ xs: "100%", md: "50%" }}
          sx={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover",
            order: { xs: 1, md: 2 },
          }} 
        />
      </Stack>
    </SwiperSlide>
  );
};

export default function Slider() {
  const slidesData = [
    {
      title: "Skip the travel! Find Online",
      highlight: { preText: "Medical", text: "Centers" },
      description:
        "Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.",
      buttonText: "Find Centers",
      buttonLink: "/search",
      image: img,
    },
  ];

  return (
    <Swiper slidesPerView={1} loop={true}>
      {slidesData.map((slide, index) => (
        <HeroSlide key={index} {...slide} />
      ))}
    </Swiper>
  );
}
