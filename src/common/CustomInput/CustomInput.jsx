import React, { forwardRef } from 'react';
import { bool, func, string } from 'prop-types';
import '@common/CustomInput/index.css';

const CustomInput = ({
  label, name, id, setData, validate,
}, ref) => {
  return (
    <div className="CustomInput">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={id} name={name} ref={ref} onChange={setData} />
      {validate === true ? <p>Is not valid</p> : ''}
    </div>
  );
};

CustomInput.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  id: string.isRequired,
  setData: func.isRequired,
  validate: bool.isRequired,
};

export default forwardRef(CustomInput);
