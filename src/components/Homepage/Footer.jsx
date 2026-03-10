import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Box sx={{
         backgroundColor: "#2e4d21",
          color: "#ffffff",
           py: 6,
            px: { xs: 2, md: 8 } 
         }}>
      
      <Grid 
            container spacing={4}
            justifyContent="space-between" 
            alignItems="flex-start"
       >
        {/* Logo */}
        <Grid item xs={12} sm={6} md={3}>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                component="img"
                src="/logo.png" 
                alt="KisanMart Logo"
                sx={{ width: 200, height: 200 }}
              />
              <Typography 
                variant="h6" 
                sx={{ fontWeight: "bold", fontSize: { xs: 18, sm: 20, md: 28 } }}
              >
                KisanMart
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/*  plain text */}
            <Grid item xs={12} sm={6} md={3} 
            sx={{ display: "flex", 
            flexDirection: "column", 
            justifyContent: "center" 
            }}>
        
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Quick Links
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography sx={{ color: "#ffffff"}}>Home</Typography>
            <Typography sx={{ color: "#ffffff"}}>Shop</Typography>
            <Typography sx={{ color: "#ffffff"}}>About Us</Typography>
            <Typography sx={{ color: "#ffffff"}}>Contact</Typography>
          </Box>
        </Grid>

        {/* Contact */}

        <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Contact
          </Typography>

          <Typography 
                variant="body2" sx={{ color: "#d0d0d0", lineHeight: 1.6 }}>
                Email: support@kisanmart.com
          </Typography>

          <Typography
           variant="body2" sx={{ color: "#d0d0d0", lineHeight: 1.6 }}>
            Phone: +91 xxxxxxxxxx
        </Typography>

          <Typography 
             variant="body2" sx={{ color: "#d0d0d0", lineHeight: 1.6 }}>
             Address: India
            </Typography>
        </Grid>

        {/* Follow Us */}
        <Grid item xs={12} sm={6} md={3} 
        sx={{
            display: "flex", 
            flexDirection: "column",
            alignItems: "flex-end"
          }}
          >

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton sx={{ color: "#ffffff" }}><FacebookIcon /></IconButton>
            <IconButton sx={{ color: "#ffffff" }}><TwitterIcon /></IconButton>
            <IconButton sx={{ color: "#ffffff" }}><InstagramIcon /></IconButton>
            <IconButton sx={{ color: "#ffffff" }}><YouTubeIcon /></IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", mt: 4, color: "#d0d0d0" }}>
        &copy; {new Date().getFullYear()} KisanMart. All Rights Reserved.
      </Box>
    </Box>
  );
}

export default Footer;