import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Button, Divider, Stack, Typography, Chip } from "@mui/material";
import { format, add, isEqual, startOfDay } from "date-fns";
import { useSwiper } from "swiper/react";

const SlidePrevButton = () => {
  const swiper = useSwiper();
  return (
    <Box
      component="img"
      src={prev}
      onClick={() => swiper.slidePrev()}
      height={48}
      width={48}
      position="absolute"
      left={0}
      top={0}
      sx={{ cursor: "pointer", zIndex: 999, bgcolor: "#fff" }}
    />
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <Box
      component="img"
      src={next}
      onClick={() => swiper.slideNext()}
      height={48}
      width={48}
      position="absolute"
      right={0}
      top={0}
      sx={{ cursor: "pointer", zIndex: 999, bgcolor: "#fff" }}
    />
  );
};

const DaySelector = ({ selectedDate, setSelectedDate, totalSlots }) => {
  const date = startOfDay(new Date());
  const dateItems = Array.from({ length: 7 }, (_, i) => add(date, { days: i }));

  const customDateFormat = (day) =>
    isEqual(day, date)
      ? "Today"
      : isEqual(day, add(day, { days: -1 }))
      ? "Tomorrow"
      : format(day, "E, d LLL");

  const handleClick = (day) => setSelectedDate(day);

  return (
    <Stack pt={3} position="relative">
      <Divider sx={{ mb: 3 }} />
      <Swiper
        slidesPerView={4}
        loop={false}
        spaceBetween={11}
        className="swiperStyles"
        breakpoints={{ 767: { spaceBetween: 30, slidesPerView: 3 } }}
      >
        {dateItems.map((day, index) => (
          <SwiperSlide key={index} className="swiperslide">
            <Stack
              textAlign="center"
              onClick={() => handleClick(day)}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                fontWeight={isEqual(day, selectedDate) ? 700 : 400}
                fontSize={{ xs: 11, md: 16 }}
              >
                {customDateFormat(day)}
              </Typography>
              <Typography fontSize={{ xs: 8, md: 12 }} color="primary.green">
                {`${totalSlots} Slots Available`}
              </Typography>
            </Stack>
          </SwiperSlide>
        ))}
        <span slot="container-start">
          <SlidePrevButton />
        </span>
        <span slot="container-end">
          <SlideNextButton />
        </span>
      </Swiper>
    </Stack>
  );
};

const TimeSlotPicker = ({
  availableSlots,
  selectedDate,
  details,
  handleBooking,
}) => {
  const handleClick = (slot) =>
    handleBooking({ ...details, bookingDate: selectedDate, bookingTime: slot });

  return (
    <Stack
      pt={3}
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {["morning", "afternoon", "evening"].map(
        (period) =>
          availableSlots[period].length > 0 && (
            <Stack
              key={period}
              direction="row"
              alignItems="center"
              px={{ xs: 0, md: 6 }}
              flexWrap="wrap"
            >
              <Typography
                width={{ xs: 1, md: "15%" }}
                fontSize={{ xs: 14, md: 16 }}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </Typography>
              {availableSlots[period].map((slot) => (
                <Chip
                  key={slot}
                  label={slot}
                  color="primary"
                  variant="outlined"
                  sx={{
                    borderRadius: "5px",
                    fontSize: { xs: 10, md: 14 },
                    cursor: "pointer",
                    "&:nth-of-type(1)": { ml: 0 },
                    mr: { xs: 1, md: 3 },
                    mt: { xs: 1, md: 0 },
                  }}
                  onClick={() => handleClick(slot)}
                />
              ))}
            </Stack>
          )
      )}
    </Stack>
  );
};

const Calendar = ({ availableSlots, details, onBookingConfirmed }) => {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));
  const totalSlots = Object.values(availableSlots).reduce(
    (acc, slot) => acc + slot.length,
    0
  );

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Select a Date & Time
      </Typography>
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <TimeSlotPicker
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={onBookingConfirmed}
      />
    </Box>
  );
};

export default Calendar;
