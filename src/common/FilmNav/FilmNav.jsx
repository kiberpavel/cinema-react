import React, { useState } from 'react';
import '@common/FilmNav/index.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userSelectors from '@store/users/users-selectors';
import ModalLogout from '@common/modals/ModalLogout/ModalLogout';
import MySwitch from '@common/MySwitch/MySwitch';
import classNames from 'classnames';
import useTheme from '@hooks/useTheme';

const FilmNav = () => {
  const status = useSelector(userSelectors.getUserStatus);
  const [modalActive, setModalActive] = useState(false);
  const { isDark } = useTheme();

  const openModal = () => {
    setModalActive(true);
  };

  return (
    <div
      className={classNames(
        'FilmNav',
        { 'film-nav__dark': isDark },
        { 'film-nav__light': !isDark },
      )}
    >
      <ul className="list">
        <Link to="/">
          <li
            className={classNames(
              'first-element',
              'list-item',
              { 'list-item__dark': isDark },
              { 'list-item__light': !isDark },
            )}
          >
            Films
          </li>
        </Link>
        <Link to="/halls">
          <li
            className={classNames(
              'list-item',
              { 'list-item__dark': isDark },
              { 'list-item__light': !isDark },
            )}
          >
            Halls
          </li>
        </Link>
        <li
          className={classNames(
            'list-item',
            { 'list-item__dark': isDark },
            { 'list-item__light': !isDark },
          )}
        >
          Seances
        </li>
        {status === null ? (
          <Link to="/login">
            <li
              className={classNames(
                'list-item',
                { 'list-item__dark': isDark },
                { 'list-item__light': !isDark },
              )}
            >
              Login
            </li>
          </Link>
        ) : (
          ''
        )}
        <li
          className={classNames(
            'list-item',
            { 'list-item__dark': isDark },
            { 'list-item__light': !isDark },
          )}
        >
          <MySwitch />
        </li>
        {status === 'resolved' ? (
          <li
            className={classNames(
              'logout',
              'list-item',
              { 'list-item__dark': isDark },
              { 'list-item__light': !isDark },
            )}
          >
            <button
              type="button"
              onClick={openModal}
              className={classNames(
                'logout-button',
                { 'logout-button__dark': isDark },
                { 'logout-button__light': !isDark },
              )}
            >
              LogOut
            </button>
          </li>
        ) : (
          ''
        )}
      </ul>
      <ModalLogout active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default FilmNav;
