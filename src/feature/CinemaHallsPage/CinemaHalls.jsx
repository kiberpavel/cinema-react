import React from 'react';
import FilmNav from '@common/FilmNav/FilmNav';
import HallsMap from '@feature/CinemaHallsPage/HallsMap/HallsMap';
import '@feature/CinemaHallsPage/index.css';

const CinemaHalls = () => {
  return (
    <div className="CinemaHalls">
      <FilmNav />
      <HallsMap />
    </div>
  );
};

export default CinemaHalls;
