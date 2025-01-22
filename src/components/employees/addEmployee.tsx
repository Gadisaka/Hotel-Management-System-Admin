import * as React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
  TextField,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { EmployeeData } from "./employeeData";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface AddEmployeeProps {
  open: boolean;
  onClose: () => void;
  employee: EmployeeData;
  // onAddEmployee: (
  //   employee: {
  //     firstName: string;
  //     lastName: string;
  //     sex: string;
  //     role: string;
  //     birthDate: string;
  //     phone: number;
  //     salary: number;
  //     image: string;
  //     username?: string;
  //     password?: string;
  //   }[]
  // ) => void;
}

const AddEmployee: React.FC<AddEmployeeProps> = ({
  open,
  onClose,
  // employee,
}) => {
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [sex, setSex] = React.useState<string>("");
  const [role, setRole] = React.useState<string>("");
  const [birthDate, setBirthDate] = React.useState<string>("");
  const [phone, setPhone] = React.useState<number | null>(null);
  const [salary, setSalary] = React.useState<number | null>(null);
  const [image, setImage] = React.useState<string>("");
  const [username, setUsername] = React.useState<string | null>(null);
  const [password, setPassword] = React.useState<string | null>(null);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState<boolean>(false);
  const [passwordError, setPasswordError] = React.useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = React.useState<string | null>(
    null
  );

  //   const [role , setRole] = React.useState("other");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newRole: string
  ) => {
    setRole(newRole);
  };

  const handleAddEmployee = () => {
    onClose();
    clearFields();
  };

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setSex("");
    setRole("");
    setBirthDate("");
    setPhone(null);
    setSalary(null);
    setImage("");
    setUsername(null);
    setPassword(null);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add Employee</DialogTitle>
      {/* Add Employee Form */}
      <DialogContent>
        <Input
          inputProps={{ accept: "image/*" }}
          style={{ display: "none" }}
          id="raised-button-file"
          type="file"
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.files && target.files[0]) {
              const reader = new FileReader();
              reader.onload = (event) => {
                if (event.target && event.target.result) {
                  setImage(event.target.result as string);
                }
              };
              reader.readAsDataURL(target.files[0]);
            }
          }}
        />
        <label htmlFor="raised-button-file">
          <Button
            component="span"
            variant="outlined"
            color="primary"
            startIcon={<UploadIcon />}
            sx={{ marginBottom: 2 }}
          >
            Upload Image
          </Button>
        </label>
        {image && (
          <Box pb={2}>
            <img
              src={image}
              alt="Uploaded"
              style={{ width: "100px", height: "100px", marginBottom: 2 }}
            />
          </Box>
        )}
        <ToggleButtonGroup
          color="primary"
          value={role}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="admin">Admin</ToggleButton>
          <ToggleButton value="receptionist">Receptionist</ToggleButton>
          <ToggleButton value="waiter">waiter</ToggleButton>
          <ToggleButton value="guard">Guard</ToggleButton>
          <ToggleButton value="chef">Chef</ToggleButton>
          <ToggleButton value="janitor">Janitor</ToggleButton>
        </ToggleButtonGroup>
        {/* Form Fields */}
        <Box>
          <Box className="flex  gap-2">
            <TextField
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              // fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              // fullWidth
              margin="normal"
            />
          </Box>
          <Box className="flex gap-8  ">
            <Box>
              <label>Sex</label>
              <Box>
                <ToggleButtonGroup
                  color="primary"
                  value={sex}
                  exclusive
                  onChange={(e, value) => setSex(value)}
                  aria-label="Sex"
                >
                  <ToggleButton value="male">Male</ToggleButton>
                  <ToggleButton value="female">Female</ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Box>
            <TextField
              label="Birth Date"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
          </Box>
          <Box className="flex  gap-2">
            <TextField
              label="Phone"
              type="number"
              value={phone}
              onChange={(e) => setPhone(Number(e.target.value))}
              margin="normal"
            />
            <TextField
              label="Salary"
              type="number"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              margin="normal"
            />
          </Box>

          {role === "receptionist" || role === "admin" ? (
            <Box className="flex  gap-2">
              <TextField
                label="Username"
                value={username ?? ""}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password ?? ""}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
              <TextField
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword ?? ""}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setPasswordError(e.target.value !== password);
                }}
                fullWidth
                margin="normal"
                error={passwordError}
                helperText={passwordError ? "Passwords do not match" : ""}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
            </Box>
          ) : null}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleAddEmployee}
          variant="contained"
          color="primary"
          sx={{ bgcolor: "green" }}
        >
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEmployee;
