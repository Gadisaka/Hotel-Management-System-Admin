import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import * as React from "react";

const AccountPage: React.FC = () => {
  interface UserData {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    salary: number;
    role: string;
  }

  const user: UserData = {
    id: 1,
    firstName: "Abel",
    lastName: "Tesfaye",
    image:
      "data:image/webp;base64,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",
    salary: 200000,
    role: "Admin",
  };
  return (
    <Box>
      <Box sx={{ maxWidth: 275 }}>
        <Card sx={{ borderRadius: 3, boxShadow: "none" }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              p: 5,
              gap: 1,
            }}
          >
            <Avatar src={user.image} sx={{ width: 80, height: 80 }} />
            <Typography sx={{ fontSize: "20px" }}>
              {user.firstName} {user.lastName}
            </Typography>
            <Typography className="text-gray-400">
              {" "}
              <span className="font-bold text-gray-400">salary: </span>{" "}
              {user.salary}
            </Typography>
            <Typography
              sx={{
                // bgcolor: "red",
                color: "white",
                paddingX: 1,
                borderRadius: 3,
              }}
              className="bg-blue-500"
            >
              {user.role}
            </Typography>
          </CardContent>
          <hr />
          <CardActions>
            <Box className="bg-blue-50 rounded-xl w-full">
              <Button fullWidth className="">
                Update Photo
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default AccountPage;
