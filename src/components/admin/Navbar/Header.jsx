import React, { useState } from "react";
import styles from "./Header.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, Select, MenuItem } from "@mui/material";
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
    <div className={styles.navbar}>

      {/* LEFT */}
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="" className={styles.logo} />
        <h1>Kisan Mart</h1>
      </div>

      {/*  SEARCH ADDED */}
      <div style={{ display: "flex", gap: "10px" }}>
        
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          size="small"
          sx={{ width: "150px" }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Fruits">Fruits</MenuItem>
          <MenuItem value="Vegetables">Vegetables</MenuItem>
          <MenuItem value="Grains">Grains</MenuItem>
          <MenuItem value="Dairy">Dairy</MenuItem>
        </Select>

        <TextField
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          sx={{ width: "300px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </div>

      {/* RIGHT */}
      <div
        tabIndex="0"
        className={styles.nameContainer}
        onClick={() => setdisplay(true)}
        onBlur={() => setdisplay(false)}
      >
        <div className={styles.circle}>A</div>
        <p>Admin</p>
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