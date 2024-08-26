import { useState } from "react";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import Calendar from "../Calendar/Calendar";

import hospitalIcon from "../../assets/hospitalicon.png";
import thumbsUpIcon from "../../assets/thumbsup.png";

export default function HospitalProfileCard({
  details,
  availableSlots,
  onSchedule,
  isBookingEnabled = false,
}) {
  const [isCalendarVisible, toggleCalendar] = useState(false);

  const renderBookingDetails = () => (
    <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
      <Chip
        label={details.bookingTime}
        variant="outlined"
        color="primary"
        sx={{ borderRadius: 1, fontSize: 14 }}
      />
      <Chip
        label={format(new Date(details.bookingDate), "dd MMMM yyyy")}
        variant="outlined"
        color="success"
        sx={{ borderRadius: 1, fontSize: 14 }}
      />
    </Stack>
  );

  return (
    <Box sx={{ borderRadius: 2, bgcolor: "#fff", p: { xs: 2, md: 4 } }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 4 }} flexWrap="wrap">
        <Box
          component="img"
          src={hospitalIcon}
          width={{ xs: 64, md: 130 }}
          height="auto"
          sx={{ flexShrink: 0, alignSelf: "start" }}
        />
        <Box flex={1}>
          <Typography
            component="h3"
            color="primary.main"
            fontWeight={600}
            fontSize={{ xs: 18, md: 20 }}
            mb={1}
            textTransform="capitalize"
            lineHeight={1}
          >
            {details["Hospital Name"].toLowerCase()}
          </Typography>
          <Typography
            textTransform="capitalize"
            color="#414146"
            fontSize={14}
            fontWeight={700}
          >
            {`${details["City"].toLowerCase()}, ${details["State"]}`}
          </Typography>
          <Typography fontSize={14} mb={1}>
            {details["Hospital Type"]}
          </Typography>
          <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography
              fontWeight={800}
              textTransform="uppercase"
              color="primary.green"
            >
              Free
            </Typography>
            <Typography sx={{ textDecoration: "line-through", color: "#787887" }}>
              ₹500
            </Typography>
            <Typography>Consultation fee at clinic</Typography>
          </Stack>
          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />
          <Stack
            direction="row"
            alignItems="center"
            bgcolor="primary.green"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
          >
            <Box
              component={"img"}
              src={thumbsUpIcon}
              width={{ xs: 16, md: 20 }}
              height={{ xs: 16, md: 20 }}
            />
            <Typography
              fontWeight={700}
              fontSize={{ xs: 14, md: 16 }}
              color="#fff"
              sx={{ opacity: 0.5 }}
            >
              {details["Hospital overall rating"] === "Not Available" ? 0 : details["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>
        <Stack
          justifyContent={isBookingEnabled ? "flex-start" : "flex-end"}
          minWidth="23%"
        >
          {!isBookingEnabled && (
            <>
              <Typography
                textAlign="center"
                color="primary.green"
                fontSize={14}
                fontWeight={500}
                mb={1}
              >
                Available Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={() => toggleCalendar(prev => !prev)}
              >
                {isCalendarVisible ? "Hide Booking Calendar" : "Book FREE Center Visit"}
              </Button>
            </>
          )}
          {isBookingEnabled && renderBookingDetails()}
        </Stack>
      </Stack>
      {isCalendarVisible && (
        <Calendar
          details={details}
          availableSlots={availableSlots}
          handleBooking={onSchedule}
        />
      )}
    </Box>
  );
}
