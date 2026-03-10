import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <Box
        component="img"
        src="/logo.png"
        alt="Kisan Mart Logo"
        sx={{
          height: 70,
          marginRight:3,
        }}
      />
    </Link>
  );
}

export default Logo;