import React, { useState } from "react";
import {
  TextField,
  Button,
  CircularProgress,
  Alert,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/store";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, login } = useAuthStore();
  const navigate = useNavigate();
  const role = "ADMIN";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await login(username, password, role);
    if (success) {
      navigate("/");
    }
  };

  return (
    <Box className="flex flex-col lg:flex-row min-h-screen gap-3 items-center justify-center bg-gray-50 p-4 sm:p-8">
      <Box className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0" />
      <Box className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 z-0" />
      <Box className="z-10 w-full flex flex-col gap-3 items-center max-w-md">
        <Typography
          variant="h1"
          fontWeight={900}
          textAlign="center"
          color="white"
          className=""
        >
          Hotelify
        </Typography>
        <Box className="z-10 w-full flex flex-col gap-2 items-center justify-center max-w-md">
          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            color="white"
            className=""
          >
            Welcome back!
          </Typography>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() =>
              (window.location.href =
                "https://hotel-management-system-reception.onrender.com/")
            }
            className="mb-4 animate-bounce"
          >
            Reception
          </Button>
        </Box>
      </Box>

      <Paper className="w-full max-w-md p-8 shadow-md z-30" elevation={3}>
        <Typography
          variant="h4"
          fontWeight={600}
          textAlign="center"
          gutterBottom
        >
          Sign in
        </Typography>
        <Typography
          variant="h5"
          fontWeight={400}
          textAlign="center"
          gutterBottom
        >
          Admin
        </Typography>

        {error && (
          <Alert severity="error" className="mb-4">
            {error}
          </Alert>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <TextField
            label="Username"
            type="text"
            variant="outlined"
            fullWidth
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            size="large"
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Sign in"
            )}
          </Button>
        </form>

        <Alert severity="info" className="mt-4">
          Use <strong>zack</strong> with password <strong>password</strong>
        </Alert>
      </Paper>
    </Box>
  );
};

export default LoginPage;
