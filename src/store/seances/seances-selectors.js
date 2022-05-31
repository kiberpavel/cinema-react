import { createSelector } from 'reselect';
import filmsSelectors from '@store/films/films-selectors';

const getSeances = (state) => {
  return state.seances.yourSeances;
};
const getCurrentSeances = createSelector(
  getSeances,
  filmsSelectors.getSelectedFilm,
  (seances, selectedFilm) => {
    return seances.filter((el) => el.film === selectedFilm);
  },
);

const getCurrentDates = createSelector(getCurrentSeances, (currentSeances) => {
  return Array.from(new Set(currentSeances.map((el) => el.date)));
});

const getAllSeances = createSelector(
  getCurrentDates,
  getCurrentSeances,
  (currentDates, currentSeances) => {
    const result = [];

    currentDates.forEach((el, index) => {
      result[index] = currentSeances.filter((elem) => elem.date === el);
    });
    return result;
  },
);

export default { getAllSeances, getCurrentDates };
