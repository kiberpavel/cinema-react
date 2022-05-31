import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import advertising from '@api/advertise';

export const fetchAdvertise = createAsyncThunk(
  'advertise/fetchAdvertise',
  async (_, { rejectWithValue }) => {
    try {
      const response = await advertising.getAdvertise();

      if (response.status !== 200) {
        throw new Error('Server error!');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const advertiseSlice = createSlice({
  name: 'advertise',
  initialState: {
    error: null,
    yourAdvertise: [],
  },
  extraReducers: {
    [fetchAdvertise.fulfilled]: (state, action) => {
      state.yourAdvertise = action.payload;
    },
    [fetchAdvertise.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default advertiseSlice.reducer;
