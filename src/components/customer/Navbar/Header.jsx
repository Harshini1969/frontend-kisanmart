import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { TextField, Select, MenuItem, InputAdornment, Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header({ search = "", setSearch, category, setCategory, cartCount = 0 }) {

  const [display, setdisplay] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function goToCart(){
    navigate("/customer/cart");
  }

    function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) return;

      try {
        const res = await fetch("http://localhost:5000/customer/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log("Error fetching user:", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className={styles.navbar}>

      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="logo" className={styles.logo} />
        <h1>Kisan Mart</h1>
      </div>

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

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
           
        <Badge badgeContent={cartCount} color="error">
          <ShoppingCartIcon
            onClick={goToCart}
            sx={{
              color:"black",
              fontSize: "1.8rem",
              cursor: "pointer"
            }}
          />
        </Badge>

        <div
          tabIndex="0"
          className={styles.nameContainer}
          onClick={() => setdisplay(true)}
          onBlur={() => setdisplay(false)}
        >
          <div className={styles.circle}>
            {user?.name?.charAt(0) || "U"}
          </div>
          <p>{user?.name || "User"}</p>
          <KeyboardArrowDownIcon />
        </div>
      </div>

      {display && (
        <div className={styles.dropdownContainer}>
          <div style={{ padding: "10px" }}>
            <div>{user?.email || "No Email"}</div>
            <div>{user?.role || "Customer"}</div>
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