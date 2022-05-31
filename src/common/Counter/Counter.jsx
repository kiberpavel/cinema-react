import React from 'react';
import '@common/Counter/index.css';
import PropTypes from 'prop-types';

const Counter = ({ objects, counterName }) => {
  return (
    <div className="FilmCount">
      <h1>
        {counterName}
        {' '}
        count:
        {objects.length}
      </h1>
    </div>
  );
};

Counter.propTypes = {
  objects: PropTypes.arrayOf(PropTypes.object).isRequired,
  counterName: PropTypes.string.isRequired,
};

export default Counter;
