import { Box, Grid, Typography } from "@mui/material";
import doctorImage from "../../assets/Doctor.png";
import pharmacyImage from "../../assets/Drugstore.png";
import hospitalImage from "../../assets/Hospital.png";
import capsuleImage from "../../assets/Capsule.png";
import ambulanceImage from "../../assets/Ambulance.png";
import ServiceIconCard from "../IconCard/IconCard";
import { useMemo } from "react";

export default function AvailableServices() {
  const serviceList = useMemo(() => [
    { img: doctorImage, title: "Doctors" },
    { img: pharmacyImage, title: "Labs" },
    { img: hospitalImage, title: "Hospitals", active: true },
    { img: capsuleImage, title: "Medical Store" },
    { img: ambulanceImage, title: "Ambulance" },
  ], []);

  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        Services You Might Need
      </Typography>
      <Grid container columnSpacing={{ xs: 1, md: 2 }} justifyContent="center">
        {serviceList.map((service) => (
          <Grid item key={service.title} xs={4} md={2.4}>
            <ServiceIconCard
              img={service.img}
              title={service.title}
              active={service.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
