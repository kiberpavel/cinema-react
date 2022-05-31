import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fileHandler } from '@store/films/filmSlice';
import '@feature/FilmCreatePage/SelectFile/index.css';

const SelectFile = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const fileChange = (event) => {
    setFile(event.target.files[0]);
    dispatch(fileHandler(event.target.files[0].name));
  };

  return (
    <div className="SelectFile">
      <img
        src={file ? URL.createObjectURL(file) : null}
        alt={file ? file.name : null}
        className="photo"
      />
      <input type="file" onChange={fileChange} />
    </div>
  );
};

export default SelectFile;
