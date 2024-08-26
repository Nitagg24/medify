import { Container, Box, Stack } from "@mui/material";
import Slider from "../../components/Slider/Slider";
import HospitalSearchBar from "../../components/HospitalSearchBar/HospitalSearchBar";
import FAQs from "../../components/FAQSection/FAQSection";
import OurFamilies from "../../components/FamilyHealthSection/FamilyHealthSection";
import Blogs from "../../components/NewsCard/NewsCard";
import PatientCaring from "../../components/PatientCareSection/PatientCareSection";
import Specialists from "../../components/Specialists/Specialists";
import Specialization from "../../components/Specialization/Specialization";
import Offers from "../../components/Promotions/Promotions";
import NavBar from "../../components/NavBar/NavBar";
import HeroServices from "../../components/AvailableServices/AvailableServices";

export default function Home() {
  return (
    <Box>
      {/* Top Navbar and Hero Section */}
      <Box sx={{ background: "linear-gradient(#E7F0FF, rgba(232, 241, 255, 0.47) 90%, #fff 10%)" }} mb={4}>
        <NavBar />
        <Container maxWidth="xl">
          <Slider />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <HospitalSearchBar />
            <HeroServices />
          </Stack>
        </Container>
      </Box>

      {/* Promotional Offers */}
      <Offers />

      {/* Service Specializations */}
      <Specialization />

      {/* Specialist Profiles */}
      <Specialists />

      {/* Patient Care Section */}
      <PatientCaring />

      {/* Latest Blog Posts */}
      <Blogs />

      {/* Family Care Services */}
      <OurFamilies />

      {/* Frequently Asked Questions */}
      <FAQs />
    </Box>
  );
}
