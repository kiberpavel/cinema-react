import React, { useState } from 'react';
import '@feature/FilmPage/FilmListItem/index.css';
import { number, string } from 'prop-types';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { setSelectFilm } from '@store/films/filmSlice';

const FilmListItem = ({
  img, alt, text, id,
}) => {
  const dispatch = useDispatch();
  const [isSelected, setSelect] = useState(false);

  const changeSelect = () => {
    setSelect(!isSelected);
  };
  const setCurrentFilm = () => dispatch(setSelectFilm(isSelected === false ? { text } : ''));

  // eslint-disable-next-line import/no-dynamic-require
  const photo = require(`@images/${img}`);
  return (
    <div
      className={classNames('FilmList', { 'select-film': isSelected })}
      onClick={() => {
        changeSelect();
        setCurrentFilm();
      }}
      role="presentation"
      id={id}
    >
      <section className="wrapper-film">
        <img src={photo} alt={alt} className="photo" />
      </section>
      <section className="wrapper-film">
        <h1 className="film-name">{text}</h1>
      </section>
    </div>
  );
};

FilmListItem.defaultProps = {
  img: '',
  alt: '',
  text: '',
  id: null,
};

FilmListItem.propTypes = {
  img: string,
  alt: string,
  text: string,
  id: number,
};

export default FilmListItem;
