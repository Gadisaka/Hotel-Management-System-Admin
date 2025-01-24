import React from "react";
import getEthiopianDate from "../../utils/ethiopianDate.js";
import { Box, Avatar, IconButton, Menu } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useSidebarStore } from "@/store/store.js";
import { Close, Menu as MenuIcon } from "@mui/icons-material";

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

  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

  const today = getFormattedDate();
  const todayEC = getEthiopianDate();

  const handleToggleSidebar = () => {
    toggleSidebar();
    console.log("clicked");
  };

  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        p: 2,
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "white",
        borderBottom: "1px solid #f0f0f0",
        // width: "full",
      }}
      // className="shadow-sm  "
    >
      <Box className="flex lg:hidden w-full">
        {" "}
        <IconButton
          sx={{
            position: "absolute",

            zIndex: 1000,
            top: 16,
            left: 16,
          }}
          onClick={handleToggleSidebar}
        >
          {isSidebarOpen ? <Close /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Box></Box>
      <Box className="hidden lg:flex">
        {today} / {todayEC}
      </Box>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>M</Avatar>
    </Box>
  );
};

export default Top;
