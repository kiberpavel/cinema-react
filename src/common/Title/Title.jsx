import React from 'react';
import { string } from 'prop-types';
import '@common/Title/index.css';
import classNames from 'classnames';
import useTheme from '@hooks/useTheme';

const Title = ({ title }) => {
  const { isDark } = useTheme();
  return (
    <div className="FilmTitle">
      <h1
        className={classNames(
          'title',
          { 'title-dark': isDark },
          { 'title-light': !isDark },
        )}
      >
        {title}
      </h1>
    </div>
  );
};

Title.propTypes = {
  title: string.isRequired,
};

export default Title;
