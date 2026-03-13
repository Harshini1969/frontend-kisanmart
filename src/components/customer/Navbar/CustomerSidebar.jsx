import React, { useState } from "react";
import styles from "./CustomerSidebar.module.css";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

function CustomerSidebar() {

const menuData = [
  { id: 1, name: "Dashboard", icon: <DashboardIcon /> },
  { id: 2, name: "Products", icon: <Inventory2OutlinedIcon /> },
  { id: 3, name: "My Orders", icon: <ReceiptLongOutlinedIcon /> },
  { id: 4, name: "Cart", icon: <ShoppingCartOutlinedIcon /> },
  { id: 5, name: "Wishlist", icon: <FavoriteBorderIcon /> },
  { id: 6, name: "Address", icon: <LocationOnOutlinedIcon /> },
  { id: 7, name: "Payments", icon: <PaymentsOutlinedIcon /> },
  { id: 8, name: "Notifications", icon: <NotificationsNoneOutlinedIcon /> },
  { id: 9, name: "Refund", icon: <RequestQuoteOutlinedIcon  /> },
  { id: 10, name: "Help", icon: <HelpOutlineOutlinedIcon /> },
  { id: 11, name: "Settings", icon: <SettingsOutlinedIcon /> },
];
  const [isMenuclose, setisMenuclose] = useState(false);


 const menuItems = menuData.map((item) => (
  <div
    key={item.id}
    className={styles.menuItem}
    style={{
      justifyContent: isMenuclose ? "center" : ""
    }}
  >
    {item.icon}
      {isMenuclose ? ""
      : 
      <p>{item.name}</p>
      }
  </div>
));
  function handleMenu(){
    if(isMenuclose===true){
      setisMenuclose(false);
      return;
    }
    setisMenuclose(true);
  }
  return (
  <div className={styles.layout}>  

    <div
      className={styles.sidebar}
      style={{
        width: isMenuclose ? "80px" : "250px",
      }}
    >

      {/* Header */}
      <div className={styles.header}
        style={{
        justifyContent: isMenuclose ? "center" : ""
      }}
  >
        <div className={styles.backIcon} 
        onClick={handleMenu}
        style={{
          transform:isMenuclose?"rotate(180deg)":""
        }}
        >
          <KeyboardDoubleArrowLeftIcon/>
        </div>

        {isMenuclose ? "" : <h2>Kisan Mart</h2>}
      </div>

      {/* Menu */}
      <div
          className={styles.menuContainer}
          style={{
            gap: isMenuclose ? "22px" : "6px"
          }}
        >
          {menuItems}
      </div>
      
      {/* Divider */}
      <div className={styles.line}></div>

      {/* Logout */}
      <div className={styles.logout}
          style={{
         justifyContent: isMenuclose ? "center" : "flex-start"
        }}
      >
        <LogoutIcon />
        {isMenuclose ? "" : <span>Logout</span>}
      </div>

    </div>

    {/* CONTENT AREA  */}
    <div className={styles.content}>
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam nulla ipsam ad architecto, vel error dolores. Quidem itaque, in veniam quas fugit nihil exercitationem perferendis aperiam, sint, reiciendis rerum.
      </p>
    </div>

  </div>
);
}

export default CustomerSidebar;