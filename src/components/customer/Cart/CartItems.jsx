import { Card, CardContent, Divider } from "@mui/material";
import { useState } from "react";
import CartItem from "./CartItem";

const initialItems = [
  { id: 1, title: "Gradient Graphic T-shirt", size: "Large", color: "White", price: 145 },
  { id: 2, title: "Checkered Shirt", size: "Medium", color: "Red", price: 180 },
  { id: 3, title: "Skinny Fit Jeans", size: "Large", color: "Blue", price: 240 },
];

function CartItems() {
  const [items, setItems] = useState(initialItems);

  // Delete 
  function handleDelete(id) {
    const newItems = items.filter((item,ind) => {
      if (item.id !== id) {
        return true;  
      } 
      else 
        {
        return false; 
      }
    });
    setItems(newItems);
  }

  return (
    <Card sx={{ flex: 2, borderRadius: 4 }}>
      <CardContent>
        {items.map((item, index) => {

          let divider = null;
          if (index < items.length - 1) {
            divider = <Divider sx={{ my: 2 }} />;
          }

          return (
            <div key={item.id}>
              <CartItem item={item} onDelete={handleDelete} />
              {divider}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default CartItems;