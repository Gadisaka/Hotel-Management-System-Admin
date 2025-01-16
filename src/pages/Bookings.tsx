import React from "react";
import { Box } from "@mui/material";
import FilterAndSearch from "@/components/bookings/FilterAndSearch";
import BookingTable from "@/components/bookings/bookingsTable";
import { bookings } from "@/components/bookings/bookingsData";

const Bookings: React.FC = () => {
  const [filteredData, setFilteredData] = React.useState(bookings);

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      {/* Filter and Search */}
      <FilterAndSearch onFilterChange={(data) => setFilteredData(data)} />

      {/* Booking Table */}
      <BookingTable data={filteredData} />
    </Box>
  );
};

export default Bookings;
