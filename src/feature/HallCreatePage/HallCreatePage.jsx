import React, { useState } from 'react';
import FilmNav from '@common/FilmNav/FilmNav';
import Title from '@common/Title/Title';
import '@feature/HallCreatePage/index.css';
import HallCounter from '@feature/HallCreatePage/HallCounter/HallCounter';
import HallMatrix from '@feature/HallCreatePage/HallMatrix/HallMatrix';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNewHall } from '@store/halls/hallSlice';
import classNames from 'classnames';
import useTheme from '@hooks/useTheme';

const HallCreatePage = () => {
  const [rows, setRows] = useState(1);
  const [col, setCol] = useState(1);
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const { isDark } = useTheme();

  const getRowCount = (value) => {
    setRows(value);
  };

  const getColCount = (value) => {
    setCol(value);
  };

  const getName = (event) => {
    setName(event.target.value);
  };

  const addHall = () => {
    console.log('omg');
    dispatch(
      addNewHall({
        row: rows,
        column: col,
        name,
      }),
    );
  };

  return (
    <div className="HallCreate">
      <FilmNav />
      <section>
        <Title title="Create Hall" />
        <section className="create-hall-wrap">
          <section className="create-hall-inputs">
            <HallCounter changeCount={getRowCount} name="Row:" />
            <HallCounter changeCount={getColCount} name="Column:" />
            <section className="hall-name-wrap create-hall-distance">
              <h1>Name: </h1>
              <input type="input" value={name} onChange={getName} />
            </section>
            <button
              className={classNames(
                'create-hall-button',
                { 'create-hall-button__dark': isDark },
                { 'create-hall-button__light': !isDark },
              )}
              type="button"
              onClick={addHall}
            >
              <Link
                className={classNames(
                  'create-hall-link',
                  { 'create-hall-link__dark': isDark },
                  { 'create-hall-link__light': !isDark },
                )}
                to="/halls"
              >
                Create Hall
              </Link>
            </button>
          </section>
          <section className="create-hall-info">
            <h1 className="create-hall-title">Hall</h1>
            <section
              className={classNames(
                'create-hall-screen',
                { 'create-hall-screen__dark': isDark },
                { 'create-hall-screen__light': !isDark },
              )}
            >
              <h1>Screen</h1>
            </section>
            <HallMatrix rows={rows} columns={col} />
          </section>
        </section>
      </section>
    </div>
  );
};

export default HallCreatePage;
