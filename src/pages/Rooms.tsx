import FilterAndSearch from "@/components/rooms/filterAndSearch";
import { Box } from "@mui/material";
import * as React from "react";
import { rooms } from "@/components/rooms/roomData";
import RoomTable from "@/components/rooms/roomTable";

const Rooms: React.FC = () => {
  const [filteredData, setFilteredData] = React.useState(rooms);

  return (
    <div>
      <Box>
        <FilterAndSearch onFilterChange={(data) => setFilteredData(data)} />
        <RoomTable data={filteredData} />
      </Box>
    </div>
  );
};

export default Rooms;
