import React from "react";
import getEthiopianDate from "../utils/ethiopianDate.js";
import { Box, Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const Top: React.FC = () => {
  const getFormattedDate = (): string => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return today.toLocaleDateString("en-US", options);
  };

  const today = getFormattedDate();
  const todayEC = getEthiopianDate();

  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        p: 2,
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "white",
      }}
      // className="shadow-sm  "
    >
      <Box></Box>
      <Box>
        {today} / {todayEC}
      </Box>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>M</Avatar>
    </Box>
  );
};

export default Top;
