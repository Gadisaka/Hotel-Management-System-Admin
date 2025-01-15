import SearchBar from "@/components/bookings/bookingSearch";
import BookingsTable from "@/components/bookings/bookingsTable";
import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Bookings: React.FC = () => {
  return (
    <div className=" flex justify-center flex-col items-center ">
      <div className="flex w-full justify-between items-center bg-red-400 ">
        <Box>
          <Typography variant="body1" color="initial" sx={{ fontSize: "20px" }}>
            blablaatbla
          </Typography>
        </Box>
        <SearchBar />
      </div>
      <BookingsTable />
    </div>
  );
};

export default Bookings;
