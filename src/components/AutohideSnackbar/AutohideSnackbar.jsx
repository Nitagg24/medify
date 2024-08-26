import { Snackbar, Alert as MuiAlert } from "@mui/material";

const CustomSnackbar = ({ isOpen, onClose, notification }) => {
  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    onClose(false);
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <MuiAlert
        onClose={closeSnackbar}
        icon={false}
        sx={{ backgroundColor: "#00A500", color: "#ffffff" }}
      >
        {notification}
      </MuiAlert>
    </Snackbar>
  );
};

export default CustomSnackbar;
