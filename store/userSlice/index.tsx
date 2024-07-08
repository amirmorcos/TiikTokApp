import { User } from "@/models/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userState = {
  user: User | null;
};

const initialState: userState = {
  user: null,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    storeUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { storeUser } = userSlice.actions;

export default userSlice;
