
import React, { useState } from "react";
import styles from "./product.module.css";
import { Chip, Snackbar, Alert } from "@mui/material";
import axios from "axios";

function ProductCard({ item }) {
  const { image, name, price, unit, isOrganic, quantity, _id } = item;
  const API = `${process.env.REACT_APP_BE_API_URL}/cart`;

  const [openSnackbar, setOpenSnackbar] = useState(false);

  async function addToCart() {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${API}/add`,
        { productId: _id, count: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setOpenSnackbar(true);
    } 
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>₹ {price} / {unit}</p>

      <div className={styles.actions}>
        <button className={styles.btn} onClick={addToCart}>
          Add To Cart
        </button>
      </div>

      {isOrganic && (
        <Chip
          label="Organic"
          sx={{
            backgroundColor: "green",
            color: "white",
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
        />
      )}

      <Chip
        label={`${quantity} ${unit}`}
        color="primary"
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      />

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {name} added to cart!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ProductCard;