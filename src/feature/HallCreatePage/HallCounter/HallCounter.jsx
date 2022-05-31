import React, { useState } from 'react';
import { func, string } from 'prop-types';
import '@feature/HallCreatePage/HallCounter/index.css';

const HallCounter = ({ name, changeCount }) => {
  const [meter, setMeter] = useState(1);
  const meterInc = () => {
    setMeter(meter + 1);
    changeCount(meter + 1);
  };
  const meterDec = () => {
    setMeter(meter - 1);
    changeCount(meter - 1);
  };

  const checkLimit = (data) => {
    if (data >= 2) {
      return false;
    }
    return true;
  };
  return (
    <div className="HallCounter create-hall-distance">
      <h1 className="hall-counter-name">{name}</h1>
      <button
        className="hall-counter-button-meter"
        type="button"
        onClick={meterDec}
        disabled={checkLimit(meter)}
      >
        -
      </button>
      <section className="hall-counter-meter">
        <h1>{meter}</h1>
      </section>
      <button
        className="hall-counter-button-meter"
        type="button"
        onClick={meterInc}
      >
        +
      </button>
    </div>
  );
};

HallCounter.propTypes = {
  name: string.isRequired,
  changeCount: func.isRequired,
};

export default HallCounter;
