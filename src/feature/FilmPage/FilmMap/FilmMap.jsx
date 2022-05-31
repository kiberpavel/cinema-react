import React, { useEffect } from 'react';
import FilmListItem from '@feature/FilmPage/FilmListItem/FilmListItem';
import '@feature/FilmPage/FilmMap/index.css';
import FilmSearch from '@feature/FilmPage/FilmSearch/FilmSearch';
import Counter from '@common/Counter/Counter';
import { Link } from 'react-router-dom';
import Title from '@common/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '@store/films/filmSlice';
import { fetchAdvertise } from '@store/advertise/advertiseSlice';
import filmSelectors from '@store/films/films-selectors';
import advertiseSelectors from '@store/advertise/advertise-selectors';
import SeancesPage from '@feature/SeancesPage/SeancesPage';
import { fetchSeances } from '@store/seances/seancesSlice';
import classNames from 'classnames';
import useTheme from '@hooks/useTheme';

const FilmMap = () => {
  const { status, error } = useSelector(filmSelectors.getFilmsState);
  const dispatch = useDispatch();
  const currentFilm = useSelector(filmSelectors.getSelectedFilm);
  const { isDark } = useTheme();

  useEffect(() => {
    dispatch(fetchFilms());
    dispatch(fetchAdvertise());
    dispatch(fetchSeances());
  }, []);

  const getFilms = useSelector(filmSelectors.getAllFilms);
  const getAdvertise = useSelector(advertiseSelectors.getAllAdvertise);

  return (
    <div>
      <Title title="Films" />
      <section className="attributes">
        <FilmSearch />
        <p className="film-clicked">{currentFilm}</p>
        <Link to="/create">
          {/* eslint-disable */}
          <button
            type="button"
            className={classNames(
              'create-button',
              { 'button-dark': isDark },
              { 'button-light': !isDark },
            )}
          >
            Create
          </button>
        </Link>
      </section>
      <section className="FilmMap">
        {getFilms.map(film => (
          <FilmListItem
            alt={film.alt}
            img={film.img}
            text={film.text}
            key={film.id}
            id={film.id}
          />
        ))}
        {status === 'loading' && <h2>Loading...</h2>}
        {error && (
          <h2>
            An error was occured:
            {error}
          </h2>
        )}
        {getAdvertise.map(adv => (
          <FilmListItem alt={adv.alt} img={adv.img} key={adv.id} id={adv.id} />
        ))}
      </section>
      {currentFilm !== '' ? <SeancesPage /> : ''}
      <Counter objects={getFilms} counterName="Films" />
    </div>
  );
};

export default FilmMap;
