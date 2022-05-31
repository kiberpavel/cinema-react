import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilmDescription } from '@store/films/filmSlice';
import filmSelectors from '@store/films/films-selectors';

const FilmDescription = () => {
  const dispatch = useDispatch();

  const checkDescription = (event) => {
    dispatch(setFilmDescription(event.target.value));
  };

  const description = useSelector(filmSelectors.getFilmDescription);

  return (
    <div>
      <p className="description">Description:</p>
      {/* eslint-disable-next-line no-restricted-globals */}
      <textarea
        className="textarea-film-create"
        value={description}
        onChange={checkDescription}
      />
    </div>
  );
};

export default FilmDescription;
