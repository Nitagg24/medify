import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

import img1 from '../../assets/lesley.png';
import img2 from '../../assets/ahmad.png';
import img3 from '../../assets/heena.png';
import img4 from '../../assets/ankur.png';
import img5 from '../../assets/ahmad-stevens.png';

export default function Specialists() {
    const specialist_data = [
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
    ];

    const SpecialistCard = ({ img, title, designation }) => (
        <Box textAlign='center'>
            <Box
                component='img'
                src={img}
                width={1}
                sx={{ boxShadow: '0 15px 55px -10px rgba(0,0,0,0.09)', borderRadius: '250px 240px 4px 4px' }}
                mb={2}
            />
            <Typography
                fontSize={{ xs: 16, md: 24 }}
                color='#1B3C74'
            >
                {title}
            </Typography>
            <Typography
                fontSize={{ xs: 14, md: 16 }}
                fontWeight={500}
                color='primary.main'
            >
                {designation}
            </Typography>
        </Box>
    );

    return (
        <Box py={4} id="find-doctors">
            <Typography variant="h2" textAlign='center' mb={3} px={2}>
                Our Medical Specialist
            </Typography>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                breakpoints={{ 767: { slidesPerView: 4 } }}
            >
                {specialist_data.map((specialist, index) => (
                    <SwiperSlide key={index}>
                        <SpecialistCard
                            img={specialist.img}
                            title={specialist.title}
                            designation={specialist.designation} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
