import React from "react";
import styles from "./product.module.css";
import { Chip } from "@mui/material";

function ProductCard({ item, addToCart }) {
  const { image, name, price, unit, isOrganic, quantity } = item;

  return (
    <div className={styles.card}>
      <img src={image} alt={name} />

      <h2>{name}</h2>
      <p>₹ {price} / {unit}</p>

      <div className={styles.actions}>
        <button
          className={styles.btn}
          onClick={() => addToCart(item)}
        >
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
            left: "10px"
          }}
        />
      )}

      <Chip
        label={`${quantity} ${unit}`}
        color="primary"
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px"
        }}
      />
    </div>
  );
}

export default ProductCard;