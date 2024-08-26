import { Box, Container, Grid, Typography } from "@mui/material";
import familyBanner from '../../assets/our-families-banner.png';

export default function FamilyHealthSection() {
    return (
        <Box pt={3} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
                <Grid container alignItems="center" spacing={{ xs: 2, md: 10 }}>
                    <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} color="primary.main">
                            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                        </Typography>
                        <Typography variant="h2" mb={2}>
                            Our Families
                        </Typography>
                        <Typography color="#77829D" lineHeight={1.8}>
                            We will work with you to develop individualized care plans, 
                            including management of chronic diseases. If we cannot assist, 
                            we can provide referrals or advice about the type of practitioner 
                            you require. We treat all enquiries sensitively and in the 
                            strictest confidence.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box component="img" src={familyBanner} width={1} height="auto" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
