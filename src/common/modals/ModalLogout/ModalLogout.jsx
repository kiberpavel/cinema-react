import React from 'react';
import '@common/modals/ModalLogout/index.css';
import Portal from '@common/Portal/Portal';
import { bool, func } from 'prop-types';
import classNames from 'classnames';

const ModalLogout = ({ active, setActive }) => {
  const doLogout = () => {
    localStorage.setItem('userStatus', JSON.stringify(null));
    setActive(false);
    window.location.reload();
  };

  const exitFromModal = () => {
    setActive(false);
  };

  return (
    <Portal active={active}>
      <div
        className={classNames('ModalLogout', { 'ModalLogout active': active })}
        role="dialog"
      >
        <section className="modal-content">
          <p>Do you want to logout?</p>
          <button type="button" onClick={doLogout}>
            Yes
          </button>
          <button type="button" onClick={exitFromModal}>
            No
          </button>
        </section>
      </div>
    </Portal>
  );
};

ModalLogout.propTypes = {
  active: bool.isRequired,
  setActive: func.isRequired,
};

export default ModalLogout;
