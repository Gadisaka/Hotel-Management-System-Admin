import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { bookings } from "./bookingsData";

export default function SearchBar() {
  const [searchText, setSearchText] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const results = bookings.filter((booking) =>
      booking.customerName.toLowerCase().startsWith(searchText.toLowerCase())
    );
    setFilteredResults(results);
  }, [searchText]);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 600,
        margin: "auto",
        mt: 2,
        bgcolor: "green",
      }}
    >
      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 2,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search by customer name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          size="small"
          fullWidth
          InputProps={{
            sx: {
              height: 40,
              "& input": {
                fontSize: "14px",
              },
            },
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>

      {/* Results Section */}
      <Box
        sx={{
          mt: 2,
          textAlign: "left",
        }}
      >
        {filteredResults.length > 0 ? (
          filteredResults.map((booking) => (
            <Box
              key={booking.id}
              sx={{
                padding: 1,
                border: "1px solid #ddd",
                borderRadius: "4px",
                mb: 1,
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <strong>Name:</strong> {booking.customerName} <br />
              <strong>Room:</strong> {booking.roomNumber} <br />
              <strong>Start Date:</strong> {booking.startDate} <br />
              <strong>End Date:</strong> {booking.endDate} <br />
              <strong>Status:</strong> {booking.status}
            </Box>
          ))
        ) : searchText.trim() !== "" ? (
          <p>No results found</p>
        ) : null}
      </Box>
    </Box>
  );
}
