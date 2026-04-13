import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Products",
      subtitle: "Manage your products",
      icon: <Inventory2OutlinedIcon />,
      route: "/admin/products",
      color: "#2563eb",
      bg: "#e0edff",
    },
    {
      title: "Orders",
      subtitle: "Track all orders",
      icon: <ShoppingCartOutlinedIcon />,
      route: "/admin/order",
      color: "#7c3aed",
      bg: "#f3e8ff",
    },
    {
      title: "Customers",
      subtitle: "View customer data",
      icon: <PeopleOutlineIcon />,
      route: "/admin/customers",
      color: "#4f46e5",
      bg: "#eef2ff",
    },
    {
      title: "Reports",
      subtitle: "Analyze reports",
      icon: <BarChartIcon />,
      route: "/admin/reports",
      color: "#f59e0b",
      bg: "#fff7ed",
    },
    {
      title: "Payments",
      subtitle: "Check the payments",
      icon: <PaymentsOutlinedIcon />,
      route: "/admin/payments",
      color: "#10b981",
      bg: "#ecfdf5",
    },
  ];

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3, md: 4  },
        height: "60vh",            
        overflowY:  { xs: "auto", md: "visible" },           
        overflowX: "hidden",
        borderRadius: "20px",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}
    >
      {/* Title */}
      <Typography variant="h4" sx={{ fontWeight: 800, color: "#0f172a" }}>
        Admin Dashboard
      </Typography>

      <Typography sx={{ fontWeight: 500, color: "#4b5563", mb: 3 }}>
        Kisan Mart
      </Typography>

      {/* Cards */}
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Card
              onClick={() => navigate(card.route)}
              sx={{
                borderRadius: 5,
                background: "#f3f4f6",
                boxShadow: "none",
                display: "flex",
                width:"240px",
                alignItems: "center",
                p: 2,
                cursor: "pointer",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: "8px !important"
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 4,
                    background: card.bg,
                    color: card.color,
                    display: "flex"
                  }}
                >
                  {card.icon}
                </Box>

                {/* Text */}
                <Box>
                  <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
                    {card.title}
                  </Typography>

                  <Typography sx={{ fontSize: 14, color: "#6b7280" }}>
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

export default Dashboard;