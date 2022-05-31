const getFilmPhoto = (state) => {
  return state.films.file;
};

const getFilmName = (state) => {
  return state.films.filmName;
};

const getFilmRating = (state) => {
  return state.films.filmRating;
};

const getFilmDescription = (state) => {
  return state.films.filmDescription;
};

const getFilmsState = (state) => {
  return state.films;
};

const getSelectedFilm = (state) => {
  return state.films.selectedFilm;
};

const getAllFilms = (state) => {
  return state.films.yourFilms;
};
export default {
  getFilmPhoto,
  getFilmName,
  getFilmRating,
  getFilmDescription,
  getFilmsState,
  getSelectedFilm,
  getAllFilms,
};
