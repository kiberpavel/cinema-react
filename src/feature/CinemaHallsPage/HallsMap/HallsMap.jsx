import React, { useEffect } from 'react';
import Title from '@common/Title/Title';
import HallListItem from '@feature/CinemaHallsPage/HallListItem/HallListItem';
import '@feature/CinemaHallsPage/HallsMap/index.css';
import Counter from '@common/Counter/Counter';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHalls } from '@store/halls/hallSlice';
import hallSelectors from '@store/halls/halls-selectors';
import classNames from 'classnames';
import useTheme from '@hooks/useTheme';

const HallsMap = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector(hallSelectors.getHallState);

  useEffect(() => {
    dispatch(fetchHalls());
  }, []);

  const getHalls = useSelector(hallSelectors.getAllHalls);
  const { isDark } = useTheme();

  return (
    <div>
      <Title title="Halls" />
      <section className="HallMap">
        {getHalls.map((hall) => (
          <HallListItem name={hall.name} row={hall.row} column={hall.column} />
        ))}
        {status === 'loading' && <h2>Loading...</h2>}
        {error && (
          <h2>
            An error was occured:
            {error}
          </h2>
        )}
      </section>
      <button
        type="button"
        className={classNames(
          'create-hall-button',
          { 'create-hall-button__dark': isDark },
          { 'create-hall-button__light': !isDark },
        )}
      >
        <Link
          className={classNames(
            'create-hall-link',
            { 'create-hall-link__dark': isDark },
            { 'create-hall-link__light': !isDark },
          )}
          to="/create-hall"
        >
          Create hall
        </Link>
      </button>
      <Counter counterName="Halls" objects={getHalls} />
    </div>
  );
};

export default HallsMap;
