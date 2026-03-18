import React, { useState } from "react";
import styles from "./AdminSidebar.module.css";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Outlet, useNavigate } from "react-router-dom";

function AdminSidebar() {

  const menuData = [
    { id: 1, name: "Dashboard", icon: <DashboardIcon />, path: "/admin" },
    { id: 2, name: "Products", icon: <Inventory2OutlinedIcon />, path:"/admin/products" },
    { id: 3, name: "Orders", icon: <ShoppingCartOutlinedIcon /> },
    { id: 4, name: "Customers", icon: <PeopleOutlineIcon />, path: "/admin/customers" },
    { id: 5, name: "Promotions", icon: <LocalOfferOutlinedIcon /> },
    { id: 6, name: "Reports", icon: <AssessmentOutlinedIcon /> },
    { id: 7, name: "Payments", icon: <PaymentsOutlinedIcon /> },
    { id: 8, name: "Settings", icon: <SettingsOutlinedIcon /> }
  ];

  const [isMenuclose, setisMenuclose] = useState(false);
  const navigate = useNavigate();
  const menuItems = menuData.map((item,ind)=>(
    <div
      key={item.id}
      className={styles.menuItem}
      onClick={() => item.path && navigate(item.path)}
      style={{
        justifyContent: isMenuclose ? "center" : ""
      }}
    >
      {item.icon}
      {isMenuclose ? "" : <p>{item.name}</p>}
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

      <div
          className={styles.menuContainer}
          style={{
            gap: isMenuclose ? "22px" : "6px"
          }}
        >
          {menuItems}
      </div>

      <div className={styles.line}></div>

      <div className={styles.logout}
          style={{
         justifyContent: isMenuclose ? "center" : "flex-start"
        }}
      >
        <LogoutIcon />
        {isMenuclose ? "" : <span>Logout</span>}
      </div>

    </div>

    {/* CONTENT AREA */}
    <div className={styles.content}>
      <Outlet />
    </div>

  </div>
);
}

export default AdminSidebar;