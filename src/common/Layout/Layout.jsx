import React from 'react';
import '@common/Layout/index.css';
import { shape } from 'prop-types';
import classNames from 'classnames';
import useTheme from '@hooks/useTheme';

const Layout = ({ children }) => {
  const { isDark } = useTheme();
  return (
    <div
      className={classNames(
        { 'layout-dark': isDark },
        { 'layout-light': !isDark },
      )}
    >
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: shape({}).isRequired,
};

export default Layout;
