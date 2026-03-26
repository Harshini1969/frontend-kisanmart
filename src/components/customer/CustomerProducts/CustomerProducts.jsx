import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import styles from "./product.module.css";
import { Grid } from "@mui/material";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

function CustomerProduct() {
  const { search, category } = useOutletContext();
  const [products, setProducts] = useState([]);
  const API = `${process.env.REACT_APP_BE_API_URL}/product`;

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await axios.get(`${API}/getAll`);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const filteredProducts = products.filter((item) => {
    const itemCategory = item.category || item.Category || "Other";

    const text = search.toLowerCase();

    const matchesSearch =
      item.name?.toLowerCase().includes(text) ||
      itemCategory?.toLowerCase().includes(text);

    const matchesCategory = category === "All" || itemCategory === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.cardsContainer}>
      <Grid container spacing={3}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Grid key={item._id} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
              <ProductCard item={item} />
            </Grid>
          ))
        ) : (
          <p style={{ padding: "20px" }}>No products found</p>
        )}
      </Grid>
    </div>
  );
}

export default CustomerProduct;