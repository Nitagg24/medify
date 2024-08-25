import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { format as formatDate } from "date-fns";

const BookingFormDialog = ({ open, onClose, bookingDetails, onSuccess }) => {
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();
    logFirstVisitEvent();

    const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const updatedBookings = [
      ...existingBookings,
      { ...bookingDetails, bookingEmail: email },
    ];

    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    onSuccess(true);
    setEmail("");
    onClose();
  };

  const logFirstVisitEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "first_visit",
      eventDate: new Date().toISOString(),
    });
  };

  const formatBookingDate = (date) =>
    date ? formatDate(new Date(date), "E, d LLL") : null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Confirm Your Booking</DialogTitle>
      <DialogContent dividers>
        <Typography>
          Please enter your email to confirm the booking for{" "}
          <strong>
            {`${bookingDetails.bookingTime} on ${formatBookingDate(
              bookingDetails.bookingDate
            )}`}
          </strong>
        </Typography>
        <form onSubmit={handleConfirm}>
          <Stack spacing={2} mt={2}>
            <TextField
              type="email"
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Stack>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleConfirm} variant="contained" type="submit">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingFormDialog;
