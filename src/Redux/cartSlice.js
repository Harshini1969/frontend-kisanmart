
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = `${process.env.REACT_APP_BE_API_URL}/cart`;

// GET CART ITEMS
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    const res = await axios.get(`${API}/getAll`);
    return res.data;
  }
);

// DELETE ITEM
export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (id) => {
    await axios.delete(`${API}/delete/${id}`);
    return id;
  }
);

// UPDATE QUANTITY
export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async ({ id, count }) => {
    const res = await axios.put(`${API}/update/${id}`, { count });
    return res.data.data; 
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      // FETCH CART
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })

      .addCase(fetchCartItems.rejected, (state) => {
        state.loading = false;
      })

      // DELETE ITEM
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item._id !== action.payload
        );
      })

      // UPDATE ITEM
      .addCase(updateCartItem.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.items.findIndex(
          (item) => item._id === updated._id
        );

        if (index !== -1) {
          state.items[index] = updated;
        }
      });
  },
});

export default cartSlice.reducer;