import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import halls from '@api/hall';

export const fetchHalls = createAsyncThunk(
  'hall/fetchHalls',
  async (_, { rejectWithValue }) => {
    try {
      const response = await halls.getHalls();

      if (response.status !== 200) {
        throw new Error('Server error!');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addNewHall = createAsyncThunk(
  'hall/addNewHall',
  async (data, { rejectWithValue }) => {
    try {
      const response = await halls.setHall(data);

      if (response.status !== 200) {
        throw new Error('Can`t add new film. Server error!');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const hallSlice = createSlice({
  name: 'hall',
  initialState: {
    yourHalls: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [fetchHalls.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchHalls.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.yourHalls = action.payload;
    },
    [fetchHalls.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default hallSlice.reducer;
