import { configureStore, createSlice, current } from "@reduxjs/toolkit";

export interface cartState {
  id: number | null;
  name: string;
  image: string;
  originalPrice: number;
  quantity: number;

  // total: number;
}

const initialCartState: cartState[] = [
  {
    id: null,
    name: "",
    image: "",
    originalPrice: 0,
    quantity: 0,

    // total: 0,
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    add: (state, { payload }) => {
      let updateItems;
      let existItemIndex = current(state).findIndex(
        (item) => item.id === payload.id
      );

      const existCartItem = current(state)[existItemIndex];
      if (existCartItem) {
        console.log(existCartItem);
        const updateItem = {
          ...existCartItem,
          quantity: current(state)[existItemIndex].quantity + 1,
        };
        updateItems = [...current(state)];
        updateItems[existItemIndex] = updateItem;
        console.log(updateItems);
      } else {
        updateItems = current(state).concat(payload);
      }

      const stateCopy = current(state);
      return (state = updateItems);
    },
    remove: (state, { payload }) => {
      let updateItems;
      let existItemIndex = current(state).findIndex(
        (item) => item.id === payload.id
      );

      const existCartItem = current(state)[existItemIndex];
      if (existCartItem.quantity === 1) {
        console.log(existCartItem);
        updateItems = state.filter((item) => item.id !== payload.id);
      } else {
        const updateItem = {
          ...existCartItem,
          quantity: current(state)[existItemIndex].quantity - 1,
        };
        updateItems = [...current(state)];
        updateItems[existItemIndex] = updateItem;
        console.log(updateItems);
      }

      const stateCopy = current(state);
      return (state = updateItems);
    },
    delete: (state, { payload }) => {
      console.log(payload);
      return (state = state.filter((item) => item.id !== payload));
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});
export default store;
export const cartActions = cartSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
