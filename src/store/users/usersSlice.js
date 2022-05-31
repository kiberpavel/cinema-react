import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import users from '@api/user';

export const addNewUser = createAsyncThunk(
  'user/addNewUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await users.setUser(data);

      if (response.status !== 201) {
        throw new Error('Can`t add new user. Server error!');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await users.loginCurrentUser(data);

      if (response.status !== 200) {
        throw new Error('Can`t add new user. Server error!');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const usersSlice = createSlice({
  name: 'user',
  initialState: {
    status: null,
    error: null,
    username: null,
    email: null,
    password: null,
    emailError: null,
    usernameError: null,
    passwordError: null,
    loginError: null,
    loginStatus: JSON.parse(localStorage.getItem('userStatus')),
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload.username;
    },
    setEmail(state, action) {
      state.email = action.payload.email;
    },
    setPassword(state, action) {
      state.password = action.payload.password;
    },
    validateEmail(state) {
      const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (reg.test(state.email) === false) {
        state.emailError = true;
      } else {
        state.emailError = false;
      }
    },
    validateUsername(state) {
      const reg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/i;
      if (reg.test(state.username) === false) {
        state.usernameError = true;
      } else {
        state.usernameError = false;
      }
    },
    validatePassword(state) {
      const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/i;
      if (reg.test(state.password) === false) {
        state.passwordError = true;
      } else {
        state.passwordError = false;
      }
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loginStatus = 'loading';
      state.loginError = null;
    },
    [loginUser.fulfilled]: (state) => {
      state.loginStatus = 'resolved';
      localStorage.setItem('userStatus', JSON.stringify(state.loginStatus));
    },
    [loginUser.rejected]: (state, action) => {
      state.loginStatus = 'rejected';
      state.loginError = action.payload;
    },
    [addNewUser.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const {
  setUsername,
  setEmail,
  setPassword,
  validateEmail,
  validateUsername,
  validatePassword,
} = usersSlice.actions;

export default usersSlice.reducer;
