import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import { useNavigate } from "react-router-dom";

function Customerdashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Products",
      subtitle: "Manage your products",
      icon: <Inventory2OutlinedIcon />,
      route: "/customer/products",
      color: "#2563eb",
      bg: "#e0edff",
    },
    {
      title: "Orders",
      subtitle: "Track all orders",
      icon: <ReceiptLongOutlinedIcon />,
      route: "/customer/orders",
      color: "#7c3aed",
      bg: "#f3e8ff",
    },
    {
      title: "Cart",
      subtitle: "View cart products",
      icon: <ShoppingCartOutlinedIcon />,
      route: "/customer/cart",
      color: "#4f46e5",
      bg: "#eef2ff",
    },
    {
      title: "Payments",
      subtitle: "Check the payments",
      icon: <PaymentsOutlinedIcon />,
      route: "/customer/payments",
      color: "#10b981",
      bg: "#ecfdf5",
    },
    {
      title: "Refund",
      subtitle: "Amount refund",
      icon: <RequestQuoteOutlinedIcon />,
      route: "/customer/refund",
      color: "#f59e0b",
      bg: "#fff7ed",
    },
  ];

  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 } ,
     height:"60vh",
     overflowY:  { xs: "auto", md: "visible" },           
        overflowX: "hidden",
        borderRadius: "20px",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
    
    }}>
      
      {/* Title */}
      <Typography
        variant="h5"
        sx={{ fontWeight: 800, color: "#111827" }}
      >
        Customer Dashboard
      </Typography>

      <Typography variant="caption" sx={{ color: "#6b7280" }}>
        Kisan Mart
      </Typography>

      {/* Cards */}
      <Grid container spacing={3} mt={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              onClick={() => navigate(card.route)}
              sx={{
                borderRadius: 4,
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                display: "flex",
                alignItems: "center",
                width:"240px",
                p: 1,
                cursor: "pointer",
                transition: "0.3s",
                
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                }
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: "8px !important",
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 3,
                    background: card.bg,
                    color: card.color,
                    display: "flex",
                  }}
                >
                  {card.icon}
                </Box>

                {/* Text */}
                <Box>
                  <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                    {card.title}
                  </Typography>

                  <Typography sx={{ fontSize: 13, color: "#6b7280" }}>
                    {card.subtitle}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Customerdashboard;