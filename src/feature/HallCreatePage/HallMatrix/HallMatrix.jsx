import React from 'react';
import { number } from 'prop-types';
import '@feature/HallCreatePage/HallMatrix/index.css';

const HallMatrix = ({ rows, columns }) => {
  const matrix = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
  return (
    <div className="HallMatrix">
      {matrix.map((row, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <section key={i}>
          {row.map((col, j) => (
            // eslint-disable-next-line react/no-array-index-key
            <input className="current-seat" type="button" key={j} />
          ))}
        </section>
      ))}
    </div>
  );
};

HallMatrix.propTypes = {
  rows: number.isRequired,
  columns: number.isRequired,
};

export default HallMatrix;
