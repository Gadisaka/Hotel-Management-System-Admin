import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

interface AddRoomProps {
  open: boolean;
  onClose: () => void;
  onAddRoom: (
    rooms: {
      roomNumber: number;
      floor: string;
      type: string;
      price: number;
      status: string;
      count?: number; // For multiple rooms
    }[]
  ) => void;
  indexLength: number; // Current length of the index to calculate the next room number
}

const AddRoom: React.FC<AddRoomProps> = ({
  open,
  onClose,
  onAddRoom,
  indexLength,
}) => {
  const [activeTab, setActiveTab] = React.useState(0); // 0 for "One Room", 1 for "Multiple Rooms"

  // Validation state
  const [roomNumberError, setRoomNumberError] = React.useState("");
  const [startNumberError, setStartNumberError] = React.useState("");

  // One Room State
  const [roomNumber, setRoomNumber] = React.useState<number>(indexLength + 1);
  const [floor, setFloor] = React.useState<string>("1");
  const [type, setType] = React.useState<string>("Single");
  const [price, setPrice] = React.useState<number | "">("");
  const [status, setStatus] = React.useState<string>("Available");

  // Multiple Rooms State
  const [startNumber, setStartNumber] = React.useState<number>(indexLength + 1);
  const [count, setCount] = React.useState<number | "">("");

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    clearFields();
  };

  const clearFields = () => {
    setRoomNumber(indexLength + 1);
    setFloor("1");
    setType("Single");
    setPrice("");
    setStatus("Available");
    setStartNumber(indexLength + 1);
    setCount("");
    setRoomNumberError("");
    setStartNumberError("");
  };

  const validateRoomNumber = (value: number) => {
    if (value < indexLength + 1) {
      setRoomNumberError(`Room number should be greater than ${indexLength}`);
    } else {
      setRoomNumberError("");
    }
  };

  const validateStartNumber = (value: number) => {
    if (value < indexLength + 1) {
      setStartNumberError(`Start number should be greater than ${indexLength}`);
    } else {
      setStartNumberError("");
    }
  };

  const handleAddRoom = () => {
    if (activeTab === 0) {
      // Add One Room
      if (!roomNumberError && price) {
        onAddRoom([
          {
            roomNumber,
            floor,
            type,
            price: Number(price),
            status,
          },
        ]);
        onClose();
        clearFields();
      } else {
        alert("Please fill out all fields correctly.");
      }
    } else {
      // Add Multiple Rooms
      if (!startNumberError && price && count) {
        const rooms = Array.from({ length: count }, (_, i) => ({
          roomNumber: startNumber + i,
          floor,
          type,
          price: Number(price),
          status,
        }));
        onAddRoom(rooms);
        onClose();
        clearFields();
      } else {
        alert("Please fill out all fields correctly.");
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add Room(s)</DialogTitle>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="One Room" />
        <Tab label="Multiple Rooms" />
      </Tabs>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 1,
          }}
        >
          {activeTab === 0 ? (
            // Form for One Room
            <>
              {roomNumberError && (
                <Typography variant="body2" color="error">
                  {roomNumberError}
                </Typography>
              )}
              <TextField
                label="Room Number"
                type="number"
                value={roomNumber}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setRoomNumber(value);
                  validateRoomNumber(value);
                }}
                fullWidth
                InputProps={{ inputProps: { min: indexLength + 1 } }}
              />
              <TextField
                select
                label="Floor"
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                fullWidth
              >
                {["1", "2", "3", "4", "5"].map((floor) => (
                  <MenuItem key={floor} value={floor}>
                    {floor}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                fullWidth
              >
                {["Single", "Double", "Triple", "VIP"].map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value) || "")}
                fullWidth
              />
              <TextField
                select
                label="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                fullWidth
              >
                {["Available", "Unavailable", "Maintenance"].map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
            </>
          ) : (
            // Form for Multiple Rooms
            <>
              {startNumberError && (
                <Typography variant="body2" color="error">
                  {startNumberError}
                </Typography>
              )}
              <TextField
                label="Start Number"
                type="number"
                value={startNumber}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setStartNumber(value);
                  validateStartNumber(value);
                }}
                fullWidth
                InputProps={{ inputProps: { min: indexLength + 1 } }}
              />
              <TextField
                label="Count"
                type="number"
                value={count}
                onChange={(e) => setCount(Number(e.target.value) || "")}
                fullWidth
                InputProps={{ inputProps: { min: 1 } }}
              />
              <TextField
                select
                label="Floor"
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                fullWidth
              >
                {["1", "2", "3", "4", "5"].map((floor) => (
                  <MenuItem key={floor} value={floor}>
                    {floor}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                fullWidth
              >
                {["Single", "Double", "Triple", "VIP"].map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value) || "")}
                fullWidth
              />
              <TextField
                select
                label="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                fullWidth
              >
                {["Available", "Unavailable", "Maintenance"].map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
            </>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddRoom} variant="contained" color="primary">
          Add Room(s)
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddRoom;
