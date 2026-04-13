import React, { useState } from "react";
import styles from "./Header.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { TextField,InputAdornment,Select,MenuItem,Box} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Header({ search = "", setSearch, category, setCategory }) {
  const [display, setdisplay] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div
      className={styles.navbar}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px"
      }}
    >
     
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="" className={styles.logo} />
        <h1>Kisan Mart</h1>
      </div>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          width: { xs: "60%", sm: "50%", md: "40%" } 
        }}
      >
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          size="small"
          sx={{
            display: { xs: "none", md: "block" },
            minWidth: "110px"
          }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Fruits">Fruits</MenuItem>
          <MenuItem value="Vegetables">Vegetables</MenuItem>
          <MenuItem value="Grains">Grains</MenuItem>
          <MenuItem value="Dairy">Dairy</MenuItem>
        </Select>

        <TextField
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          fullWidth
          sx={{
            background: "white",
            borderRadius: "20px",
            "& .MuiInputBase-root": {
              height: "34px",
              fontSize: "14px"
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ fontSize: "16px" }} />
              </InputAdornment>
            )
          }}
        />
      </Box>

      <div
        tabIndex="0"
        className={styles.nameContainer}
        onClick={() => setdisplay(true)}
        onBlur={() => setdisplay(false)}
        style={{ display: "flex", alignItems: "center", gap: "5px" }}
      >
        <div className={styles.circle}>A</div>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <p>Admin</p>
        </Box>

        <KeyboardArrowDownIcon />
      </div>

      {display && (
        <div className={styles.dropdownContainer}>
          <div style={{ padding: "10px" }}>
            <div>admin@gmail.com</div>
            <div>Admin</div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.logoutContainer}>
            <PowerSettingsNewIcon sx={{ fontSize: "1.5rem" }} />

            <Button
              className={styles.logoutBtn}
              sx={{ color: "#ed1f1c" }}
              onMouseDown={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;