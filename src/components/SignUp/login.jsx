import React, { useState } from "react";
import axios from "axios";
import {TextField,Button,Typography,Box,Card,CardContent,Link,Snackbar,Alert,} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Appbar from "../LandingPage/AppBar";

function Login() {
  const BASE_URL = process.env.REACT_APP_BE_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [snackbar, setSnackbar] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (email === "" || password === "") {
      setSnackbar({ open: true, type: "warning", message: "Please fill all the details" });
      setIsLoading(false);
      return;
    }

    const formData = { email, password };
    try {
      const res = await axios.post(`${BASE_URL}/customer/login`, formData);
      const token = res.data.token;
      localStorage.setItem("token", token);
      const decoded = JSON.parse(atob(token.split(".")[1]));

      if (decoded.role === "admin") 
        {
          navigate("/admin")
        };
      if (decoded.role === "customer") 
        {
          navigate("/customer");
          
        }

      setSnackbar({ open: true, 
        type: "success", 
        message: "Login Successful!" 
      });
    } 
    catch (err) {
      setSnackbar({
        open: true,
        type: "error",
        message: err.response?.data?.message || "Login Failed",
      });
    } finally {
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }
  };
             
  return (  
     <Box>
      <Appbar/>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
          }}
        >
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h4" textAlign="center" gutterBottom>
            Login
          </Typography>

          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>

          <Typography textAlign="center" sx={{ mt: 2 }}>
            Don't have an account?{" "}
            <Link onClick={() => navigate("/register")} sx={{ cursor: "pointer" }}>
              Register
            </Link>
          </Typography>
        </CardContent>
      </Card>

      {/* snackbar*/}
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

export default Login;