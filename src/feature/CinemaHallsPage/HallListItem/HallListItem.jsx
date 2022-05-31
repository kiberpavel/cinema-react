import React from 'react';
import { number, string } from 'prop-types';
import '@feature/CinemaHallsPage/HallListItem/index.css';
import classNames from 'classnames';
import useTheme from '@hooks/useTheme';

const HallListItem = ({ name, row, column }) => {
  const { isDark } = useTheme();

  return (
    <div className="HallList">
      <section
        className={classNames(
          'hall-wrap',
          { 'hall-wrap__dark': isDark },
          { 'hall-wrap__light': !isDark },
        )}
      >
        <p className="number-of-seats">
          {row}
          x
          {column}
        </p>
      </section>
      <section className="hall-name-wrap">
        <p>{name}</p>
      </section>
    </div>
  );
};

HallListItem.propTypes = {
  name: string.isRequired,
  row: number.isRequired,
  column: number.isRequired,
};

export default HallListItem;
