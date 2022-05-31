import React, { createRef, useEffect } from 'react';
import CustomInput from '@common/CustomInput/CustomInput';
import '@feature/RegisterPage/index.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewUser,
  setEmail,
  setUsername,
  setPassword,
  validateEmail,
  validateUsername,
  validatePassword,
} from '@store/users/usersSlice';
import userSelectors from '@store/users/users-selectors';

const RegisterPage = () => {
  const inputRefEmail = createRef(null);
  const inputRefName = createRef(null);
  const inputRefPassword = createRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    inputRefEmail.current.focus();
  }, []);

  const setUserEmail = (event) => {
    dispatch(setEmail({ email: event.target.value }));
    dispatch(validateEmail());
  };

  const setName = (event) => {
    dispatch(setUsername({ username: event.target.value }));
    dispatch(validateUsername());
  };

  const setUserPassword = (event) => {
    dispatch(setPassword({ password: event.target.value }));
    dispatch(validatePassword());
  };

  const email = useSelector(userSelectors.getUserEmail);
  const username = useSelector(userSelectors.getName);
  const password = useSelector(userSelectors.getUserPassword);
  const checkEmail = useSelector(userSelectors.getValidEmail);
  const checkName = useSelector(userSelectors.getValidUsername);
  const checkPassword = useSelector(userSelectors.getValidPassword);

  const setUser = () => {
    dispatch(
      addNewUser({
        email,
        username,
        password,
      }),
    );
  };
  return (
    <div className="RegisterPage">
      <section>
        <h1>Registration</h1>
      </section>
      <CustomInput
        name="email"
        label="email"
        id="email"
        ref={inputRefEmail}
        setData={setUserEmail}
        validate={checkEmail}
      />
      <CustomInput
        name="name"
        label="name"
        id="name"
        ref={inputRefName}
        setData={setName}
        validate={checkName}
      />
      <CustomInput
        name="password"
        label="password"
        id="password"
        ref={inputRefPassword}
        setData={setUserPassword}
        validate={checkPassword}
      />
      <button type="button" onClick={setUser}>
        Register
      </button>
    </div>
  );
};

export default RegisterPage;
