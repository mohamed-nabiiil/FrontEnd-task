import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  FirstName: string;
  LastName: string;
  Phone: string;
  Email: string;
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    addUserSuccess(state) {
      state.loading = false;
    },
    addUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUserStart,
  addUserSuccess,
  addUserFailure,
} = userSlice.actions;

export const fetchUsers = () => async (dispatch: any) => {
  dispatch(fetchUsersStart());
  try {
    const response = await axios.get<User[]>(
      "http://localhost:1337/user-informations"
    );
    dispatch(fetchUsersSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchUsersFailure(error.message));
  }
};

export const addUser = (userData: User) => async (dispatch: any) => {
  dispatch(addUserStart());
  try {
    await axios.post("http://localhost:1337/user-informations", userData);
    dispatch(addUserSuccess());
  } catch (error: any) {
    dispatch(addUserFailure(error.message));
  }
};

export default userSlice.reducer;
