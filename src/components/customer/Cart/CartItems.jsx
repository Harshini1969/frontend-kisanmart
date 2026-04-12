import { Card, CardContent, Divider } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CartItem from "./CartItem";

function CartItems({ setSubtotal, setCartItems }) {
  const [items, setItems] = useState([]);

  const API = `${process.env.REACT_APP_BE_API_URL}/cart`;

  //  GET CART ITEMS 
  const getCartItems = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${API}/getAll`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setItems(res.data);
      setCartItems(res.data);

    } catch (err) {
      console.log(err);
    }
  }, [API, setCartItems]);

  //  DELETE ITEM
  async function deleteItem(id) {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${API}/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setItems((prev) => {
        const updated = prev.filter((item) => item._id !== id);
        setCartItems(updated);
        return updated;
      });

    } catch (err) {
      console.log(err);
    }
  }

  // UPDATE QUANTITY
  async function updateQuantity(id, count) {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `${API}/update/${id}`,
        { count },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setItems((prev) => {
        const updated = prev.map((item) =>
          item._id === id ? { ...item, count } : item
        );

        setCartItems(updated);
        return updated;
      });

    } catch (err) {
      console.log(err);
    }
  }

  //  LOAD DATA
  useEffect(() => {
    getCartItems();
  }, [getCartItems]);

  //  SUBTOTAL CALCULATION
  useEffect(() => {
    const total = items.reduce(
      (sum, item) =>
        sum + (item.productId?.price || 0) * (item.count || 0),
      0
    );

    setSubtotal(total);
  }, [items, setSubtotal]);

  return (
    <Card sx={{ flex: 2, borderRadius: 4 }}>
      <CardContent>

        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          items.map((item, index) => {
            const product = item.productId;

            return (
              <div key={item._id}>
                <CartItem
                  item={{
                    id: item._id,
                    name: product?.name,
                    category: product?.category,
                    price: product?.price,
                    unit: product?.unit,
                    image: product?.image,
                    quantity: item.count
                  }}
                  deleteItem={deleteItem}
                  updateQuantity={updateQuantity}
                />

                {index < items.length - 1 && (
                  <Divider sx={{ my: 2 }} />
                )}
              </div>
            );
          })
        )}

      </CardContent>
    </Card>
  );
}

export default CartItems;