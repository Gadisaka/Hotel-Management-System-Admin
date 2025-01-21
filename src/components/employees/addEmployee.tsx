import * as React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  TextField,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface AddEmployeeProps {
  open: boolean;
  onClose: () => void;
  onAddEmployee: (
    employee: {
      firstName: string;
      lastName: string;
      sex: string;
      role: string;
      birthDate: string;
      phone: number;
      salary: number;
      image: string;
      username?: string;
      password?: string;
    }[]
  ) => void;
}

const AddEmployee: React.FC<AddEmployeeProps> = ({
  open,
  onClose,
  onAddEmployee,
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
          <Box className="flex  gap-2">
            <TextField
              label="Sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              margin="normal"
            />
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
              value={phone ?? ""}
              onChange={(e) => setPhone(Number(e.target.value))}
              margin="normal"
            />
            <TextField
              label="Salary"
              type="number"
              value={salary ?? ""}
              onChange={(e) => setSalary(Number(e.target.value))}
              margin="normal"
            />
          </Box>
          {/* upload image */}
          {/* <Box>
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
                  reader.readAsDataURL(
                    (e.target as HTMLInputElement).files![0]
                  );
                }
              }}
            />
            <label htmlFor="raised-button-file">
              <Button component="span">Upload Image</Button>
            </label>
            {image && (
              <Box mt={2}>
                <img src={image} alt="Uploaded" style={{ width: "100%" }} />
              </Box>
            )}
          </Box> */}
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
                type="password"
                value={password ?? ""}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
              />
            </Box>
          ) : null}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddEmployee} variant="contained" color="primary">
          Hire
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEmployee;
