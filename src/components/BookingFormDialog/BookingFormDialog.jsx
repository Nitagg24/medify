import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { format } from "date-fns";

export default function BookingFormDialog({
  onClose,
  isOpen,
  bookingInfo,
  displaySuccessMessage,
}) {
  const [userEmail, setUserEmail] = useState("");

  const handleSubmitBooking = (event) => {
    event.preventDefault();
    logFirstVisitEvent();

    const storedBookings = localStorage.getItem("bookings") || "[]";

    const previousBookings = JSON.parse(storedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...previousBookings,
        { ...bookingInfo, bookingEmail: userEmail },
      ])
    );
    displaySuccessMessage(true);
    setUserEmail("");
    onClose(false);
  };

  const logFirstVisitEvent = () => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "first_visit",
      eventDate: new Date().toISOString(),
    });
  };

  const formatBookingDate = (date) => {
    if (date) {
      const bookingDate = new Date(date);
      return format(bookingDate, "E, d LLL");
    }
    return null;
  };

  return (
    <Modal open={isOpen} onClose={() => onClose(false)}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: { xs: 3, md: 4 },
          outline: 0,
          bgcolor: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography component="h3" variant="h3">
          Confirm Your Booking
        </Typography>
        <Typography fontSize={14} mb={3}>
          <Box component="span">
            Please enter your email to confirm the booking for{" "}
          </Box>
          <Box component="span" fontWeight={600}>
            {`${bookingInfo.bookingTime} on ${formatBookingDate(
              bookingInfo.bookingDate
            )}`}
          </Box>
        </Typography>
        <form onSubmit={handleSubmitBooking}>
          <Stack alignItems="flex-start" spacing={2}>
            <TextField
              type="email"
              label="Enter your email"
              variant="outlined"
              fullWidth
              required
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <Stack direction="row" spacing={1}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disableElevation
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                size="large"
                disableElevation
                onClick={() => onClose(false)}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
