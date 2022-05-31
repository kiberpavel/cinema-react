import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { seFilmName } from '@store/films/filmSlice';
import filmSelectors from '@store/films/films-selectors';

const FilmName = () => {
  const dispatch = useDispatch();

  const checkName = (event) => {
    dispatch(seFilmName({ name: event.target.value }));
  };

  const name = useSelector(filmSelectors.getFilmName);

  return (
    <div className="wrap-distance">
      <label htmlFor="name-film-save">
        Name:
        {/* eslint-disable-next-line no-restricted-globals */}
        <input
          type="text"
          id="name-film-sav"
          value={name}
          onChange={checkName}
        />
      </label>
    </div>
  );
};

export default FilmName;
