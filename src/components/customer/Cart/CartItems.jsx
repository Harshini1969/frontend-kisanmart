import { Card, CardContent, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import CartItem from "./CartItem";

function CartItems({ setSubtotal }) {

  const [items, setItems] = useState([]);
  const API = `${process.env.REACT_APP_BE_API_URL}/cart`;

  async function getCartItems() {
    try {
      const res = await axios.get(`${API}/getAll`);
      setItems(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteItem(id) {
    try {
      await axios.delete(`${API}/delete/${id}`);
      setItems((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function updateQuantity(id, count) {
    try {
      const res = await axios.put(`${API}/update/${id}`, { count });
      const updatedItem = res.data.data;
      setItems((prev) =>
        prev.map((item) =>
          item._id === id ? updatedItem : item
        )
      );

    } catch (err) {
      console.log(err);
    }
  }

   useEffect(() => {
    getCartItems();
  }, []);

  //  Subtotal calculation 
  useEffect(() => {
    const total = items.reduce(
      (sum, item) => sum + item.productId.price * item.count,
      0
    );
    setSubtotal(total);
  }, [items, setSubtotal]);

  return (
    <Card sx={{ flex: 2, borderRadius: 4 }}>
      <CardContent>

        {items.map((item, index) => {
          const product = item.productId;

          return (
            <div key={item._id}>

              <CartItem
                item={{
                  id: item._id,
                  name: product.name,
                  category: product.category,
                  price: product.price,
                  unit: product.unit,
                  image: product.image,
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
        })}

      </CardContent>
    </Card>
  );
}

export default CartItems;