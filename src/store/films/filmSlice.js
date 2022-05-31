import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import films from '@api/film';

export const fetchFilms = createAsyncThunk(
  'film/fetchFilms',
  async (_, { rejectWithValue }) => {
    try {
      const response = await films.getFilms();

      if (response.status !== 200) {
        throw new Error('Server error!');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addNewFilm = createAsyncThunk(
  'film/addNewFilm',
  async (data, { rejectWithValue }) => {
    try {
      const response = await films.setFilm(data);

      if (response.status !== 200) {
        throw new Error('Can`t add new film. Server error!');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const filmSlice = createSlice({
  name: 'film',
  initialState: {
    selectedFilm: '',
    file: '',
    filmName: '',
    filmRating: '',
    filmDescription: '',
    status: null,
    error: null,
    yourFilms: [],
  },
  reducers: {
    setSelectFilm(state, action) {
      state.selectedFilm = action.payload.text;
    },
    fileHandler(state, action) {
      state.file = action.payload;
    },
    seFilmName(state, action) {
      state.filmName = action.payload.name;
    },
    setFilmRating(state, action) {
      state.filmRating = action.payload.rating;
    },
    setFilmDescription(state, action) {
      state.filmDescription = action.payload.description;
    },
  },
  extraReducers: {
    [fetchFilms.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchFilms.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.yourFilms = action.payload;
    },
    [fetchFilms.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [addNewFilm.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const {
  setSelectFilm,
  fileHandler,
  seFilmName,
  setFilmRating,
  setFilmDescription,
} = filmSlice.actions;

export default filmSlice.reducer;
