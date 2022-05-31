import '@feature/FilmPage/index.css';
import FilmNav from '@common/FilmNav/FilmNav';
import FilmMap from '@feature/FilmPage/FilmMap/FilmMap';
import React from 'react';

const FilmPage = () => {
  return (
    <div className="FilmPage">
      <FilmNav />
      <FilmMap />
    </div>
  );
};

export default FilmPage;
