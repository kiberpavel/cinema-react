import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilmRating } from '@store/films/filmSlice';

const FilmRating = () => {
  const dispatch = useDispatch();

  const [rating, setRating] = useState('');

  const checkCheckBox = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setRating(value);
    dispatch(setFilmRating({ rating: value }));
  };

  const checkWhatChecked = (data, yourRating) => {
    if (data === yourRating) {
      return true;
    }
    return false;
  };

  return (
    <div className="wrap-radio wrap-distance">
      <p>Rating:</p>
      <label htmlFor="radio-twelve">
        <input
          type="radio"
          value="12+"
          name="radio"
          id="radio-twelve"
          onChange={checkCheckBox}
          checked={checkWhatChecked(rating, '12+')}
        />
        12+
      </label>
      <label htmlFor="radio-eighteen">
        <input
          type="radio"
          value="18+"
          name="radio"
          id="radio-eighteen"
          onChange={checkCheckBox}
          checked={checkWhatChecked(rating, '18+')}
        />
        18+
      </label>
    </div>
  );
};

export default FilmRating;
