import React from 'react';
import '@feature/FilmCreatePage/index.css';
import SelectFile from '@feature/FilmCreatePage/SelectFile/SelectFile';
import FilmName from '@feature/FilmCreatePage/FilmName/FilmName';
import FilmRating from '@feature/FilmCreatePage/FilmRating/FilmRating';
import FilmDescription from '@feature/FilmCreatePage/FilmDescription/FilmDescription';
import { useDispatch, useSelector } from 'react-redux';
import { addNewFilm } from '@store/films/filmSlice';
import filmSelectors from '@store/films/films-selectors';

const FilmCreatePage = () => {
  const image = useSelector(filmSelectors.getFilmPhoto);
  const name = useSelector(filmSelectors.getFilmName);
  const rating = useSelector(filmSelectors.getFilmRating);
  const description = useSelector(filmSelectors.getFilmDescription);

  const dispatch = useDispatch();

  const check = (e) => {
    dispatch(
      addNewFilm({
        img: image,
        text: name,
        description,
        alt: 'photo',
        year: rating,
      }),
    );
    e.preventDefault();
  };

  return (
    <form onSubmit={check}>
      <div className="FilmCreate">
        <SelectFile />
        <section className="wrap-inputs">
          <FilmName />
          <FilmRating />
          <FilmDescription />
        </section>
      </div>
      <button type="submit" className="save-film-button">
        Save
      </button>
    </form>
  );
};

export default FilmCreatePage;
