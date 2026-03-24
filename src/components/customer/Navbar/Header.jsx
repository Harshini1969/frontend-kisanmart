import React, { useState } from "react";
import styles from "./Header.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { TextField, Select, MenuItem, InputAdornment } from "@mui/material";

function Header({ search = "", setSearch, category, setCategory }) {

  const [display, setdisplay] = useState(false);

  return (
    <div className={styles.navbar}>

      {/* LOGO */}
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="" className={styles.logo} />
        <h1>Kisan Mart</h1>
      </div>

      {/* SEARCH */}
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
          sx={{ width: "350px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />

      </div>

      {/* PROFILE */}
      <div
        tabIndex="0"
        className={styles.nameContainer}
        onClick={() => setdisplay(true)}
        onBlur={() => setdisplay(false)}
      >
        <div className={styles.circle}>H</div>
        <p>Harshini</p>
        <KeyboardArrowDownIcon />
      </div>

      {display && (
        <div className={styles.dropdownContainer}>
          <div style={{ padding: "10px" }}>
            <div>harshini@gmail.com</div>
            <div>Customer</div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.logoutContainer}>
            <PowerSettingsNewIcon sx={{ fontSize: "1.5rem" }} />
            <Button
              className={styles.logoutBtn}
              sx={{ color: "#ed1f1c" }}
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