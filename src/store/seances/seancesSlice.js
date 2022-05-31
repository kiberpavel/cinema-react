import seances from '@api/seances';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSeances = createAsyncThunk(
  'seance/fetchSeances',
  async (_, { rejectWithValue }) => {
    try {
      const response = await seances.getSeances();

      if (response.status !== 200) {
        throw new Error('Server error!');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const seancesSlice = createSlice({
  name: 'seance',
  initialState: {
    yourSeances: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [fetchSeances.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchSeances.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.yourSeances = action.payload;
    },
    [fetchSeances.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default seancesSlice.reducer;
