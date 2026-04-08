// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API = `${process.env.REACT_APP_BE_API_URL}/cart`;

// // GET CART ITEMS
// export const fetchCartItems = createAsyncThunk(
//   "cart/fetchCartItems",
//   async () => {
//     const res = await axios.get(`${API}/getAll`);
//     return res.data;
//   }
// );

// // DELETE ITEM
// export const deleteCartItem = createAsyncThunk(
//   "cart/deleteCartItem",
//   async (id) => {
//     await axios.delete(`${API}/delete/${id}`);
//     return id;
//   }
// );

// // UPDATE QUANTITY
// export const updateCartItem = createAsyncThunk(
//   "cart/updateCartItem",
//   async ({ id, count }) => {
//     const res = await axios.put(`${API}/update/${id}`, { count });
//     return res.data.data; 
//   }
// );

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//     loading: false,
//   },
//   reducers: {},

//   extraReducers: (builder) => {
//     builder

//       // FETCH CART
//       .addCase(fetchCartItems.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(fetchCartItems.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.loading = false;
//       })

//       .addCase(fetchCartItems.rejected, (state) => {
//         state.loading = false;
//       })

//       // DELETE ITEM
//       .addCase(deleteCartItem.fulfilled, (state, action) => {
//         state.items = state.items.filter(
//           (item) => item._id !== action.payload
//         );
//       })

//       // UPDATE ITEM
//       .addCase(updateCartItem.fulfilled, (state, action) => {
//         const updated = action.payload;
//         const index = state.items.findIndex(
//           (item) => item._id === updated._id
//         );

//         if (index !== -1) {
//           state.items[index] = updated;
//         }
//       });
//   },
// });

// export default cartSlice.reducer;


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk(
  "users/fetchCart",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_API_URL}/cart`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    loading: false,
    error: null
  },

  reducers: {
    add: (state, action) => {
      let arr = [...state.cart, ...action.payload];
      state.cart = arr;
    },

    incCount: (state, action) => {
      let arr = state.cart;

      let newArr = arr.map((item) => {
        if (item._id === action.payload) {
          return {
            ...item,
            count: item.count + 1
          };
        }
        return item;
      });

      state.cart = newArr;
    },

    decCount: (state, action) => {
      let arr = state.cart;

      let newArr = arr.map((item) => {
        if (item._id === action.payload) {
          return {
            ...item,
            count: item.count - 1
          };
        }
        return item;
      });

      state.cart = newArr;
    },

    deleteItem: (state, action) => {
      let arr = state.cart;

      let newArr = arr.filter((item) => {
        if (item._id === action.payload) {
          return false;
        }
        return true;
      });

      state.cart = newArr;
    },

    deleteAll: (state) => {
      state.cart = [];
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })

      .addCase(fetchCart.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      });
  }
});

export const { add, incCount, decCount, deleteItem, deleteAll } = cartSlice.actions;
export default cartSlice.reducer;