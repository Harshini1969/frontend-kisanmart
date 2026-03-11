import React, { useState } from "react";
import styles from "./Header.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Button from "@mui/material/Button";

function Header() {

  const [display, setdisplay] = useState(false);

  return (
    <div className={styles.navbar}>

      {/* LEFT */}
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="" className={styles.logo} />
        <h1>Kisan Mart</h1>
      </div>

      {/* RIGHT */}
      <div
      tabIndex="0"
        className={styles.nameContainer}
        onClick={() => setdisplay(true)}
        onBlur={()=>setdisplay(false)}
      >
        <div className={styles.circle}>A</div>
        <p>Admin</p>
        <KeyboardArrowDownIcon />
      </div>

      {/* DROPDOWN */}

      {display === false ? "" : (

        <div className={styles.dropdownContainer}>

          <div style={{ padding: "10px" }}>
            <div>admin@gmail.com</div>
            <div>Admin</div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.logoutContainer}>
            <PowerSettingsNewIcon
              sx={{ fontSize: "1.5rem" }}
            />

            <Button className={styles.logoutBtn}
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