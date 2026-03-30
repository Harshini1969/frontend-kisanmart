import { Card, CardContent, Divider } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";

import {fetchCartItems,deleteCartItem,updateCartItem,} from  "../../../Redux/cartSlice";

function CartItems({ setSubtotal }) {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  //  Fetch from Redux instead of axios
  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  //  Subtotal calculation
  useEffect(() => {
    const total = items.reduce((item, ind) => {
        return item + ind.productId.price * ind.count;
      }, 0);
    
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
                  quantity: item.count,
                }}
                deleteItem={(id) => dispatch(deleteCartItem(id))}
                updateQuantity={(id, count) =>
                  dispatch(updateCartItem({ id, count }))
                }
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