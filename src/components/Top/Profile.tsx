import { Box, Dialog } from "@mui/material";
import * as React from "react";
const Profile: React.FC = () => {
  interface DialogProps {
    open: boolean;
    onClose: () => void;
    user: {
      image: string;
      role: string;
      username: string;
    };
  }

  const [open, setOpen] = React.useState(false);
  const user = {
    image: "path/to/image.jpg",
    role: "Admin",
    username: "JohnDoe",
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box>
        <img src={user.image} alt={user.username} />
        <p>{user.username}</p>
        <p>{user.role}</p>
      </Box>
    </Dialog>
  );
};

export default Profile;
