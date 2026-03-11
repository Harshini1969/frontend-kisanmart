import React, { useState } from "react";
import axios from "axios";
import {TextField,Button,Typography,Box,Card,CardContent,Link,Snackbar,Alert,} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Appbar from "../LandingPage/AppBar";

function Register() {
  const BASE_URL = process.env.REACT_APP_BE_API_URL;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  async function register(event) {
    event.preventDefault();
    setIsLoading(true);

    if (!name || !email || !mobile || !password || !confirmPassword) {
      setSnackbar({ open: true, type: "warning", message: "Please fill all the details" });
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setSnackbar({ open: true, type: "error", message: "Passwords do not match" });
      setIsLoading(false);
      return;
    }

    const formData = { name, email, mobile, password };

    try {
      const res = await axios.post(`${BASE_URL}/customer/register`, formData);

      setSnackbar({ open: true, type: "success", message: res.data.message });

      // Reset fields
      setName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setSnackbar({
        open: true,
        type: "error",
        message: err.response?.data?.message || "Registration failed",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Box>
      <Appbar/>

      <Box display="flex"
       justifyContent="center" 
       alignItems="center"
       height="100vh"
       
       >
      <Card sx={{ width: 420, padding: 2 }}>
        <CardContent>
          <Typography variant="h4" textAlign="center" gutterBottom>
            Register
          </Typography>

          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Mobile"
            fullWidth
            margin="normal"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            onClick={register}
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </Button>

          <Typography textAlign="center" sx={{ mt: 1 }}>
            Already registered?{" "}
            <Link onClick={() => navigate("/login")} sx={{ cursor: "pointer" }}>
              Login
            </Link>
          </Typography>
        </CardContent>
      </Card>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleSnackbarClose} 
          severity={snackbar.type} 
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  </Box>
  );
}

export default Register;