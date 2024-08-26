import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { format, add, isEqual, startOfDay } from "date-fns";
import { useSwiper } from "swiper/react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const SlidePrevButton = () => {
  const swiper = useSwiper();
  return (
    <Button onClick={() => swiper.slidePrev()} sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 999 }}>
      <NavigateBeforeIcon />
    </Button>
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <Button onClick={() => swiper.slideNext()} sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 999 }}>
      <NavigateNextIcon />
    </Button>
  );
};

const DaySelector = ({ selectedDate, setSelectedDate, totalSlots }) => {
  const date = startOfDay(new Date());
  const dateItems = Array.from({ length: 7 }, (_, i) => add(date, { days: i }));
  const customDateFormat = (day) => isEqual(day, date) ? "Today" : isEqual(add(date, { days: -1 }), day) ? "Tomorrow" : format(day, "E, d LLL");

  return (
    <Stack pt={3} position="relative">
      <Divider sx={{ mb: 3 }} />
      <Swiper slidesPerView={4} loop={false} spaceBetween={11}>
        {dateItems.map((day, index) => (
          <SwiperSlide key={index}>
            <Stack textAlign="center" sx={{ cursor: "pointer" }} onClick={() => setSelectedDate(day)}>
              <Typography fontWeight={isEqual(day, selectedDate) ? 700 : 400}>{customDateFormat(day)}</Typography>
              <Typography color="primary.green">{`${totalSlots} Slots Available`}</Typography>
            </Stack>
          </SwiperSlide>
        ))}
        <span slot="container-start"><SlidePrevButton /></span>
        <span slot="container-end"><SlideNextButton /></span>
      </Swiper>
    </Stack>
  );
};

export default DaySelector;
