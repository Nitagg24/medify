import { Box, Stack, Typography } from "@mui/material";

export default function IconCard({ img, title, bgColor, active = false, shadow = false }) {
  const getBackgroundColor = () => active ? "rgba(42,167,255,0.08)" : bgColor;
  const getBorder = () => active ? "1px solid #2AA7FF" : "0";
  const getBoxShadow = () => shadow ? "0 0 24px rgba(0,0,0,0.09)" : "none";
  const getColor = () => active ? "#2AA7FF" : "#ABB6C7";
  const getFontWeight = () => active ? 600 : 400;

  return (
    <Stack
      spacing={2}
      alignItems="center"
      bgcolor={getBackgroundColor()}
      p={3}
      borderRadius={2}
      border={getBorder()}
      boxShadow={getBoxShadow()}
    >
      <Box component="img" src={img} height={60} width={60} />
      <Typography
        color={getColor()}
        fontSize={18}
        fontWeight={getFontWeight()}
      >
        {title}
      </Typography>
    </Stack>
  );
}
