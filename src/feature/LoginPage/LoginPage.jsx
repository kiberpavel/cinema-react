import React, { createRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '@common/CustomInput/CustomInput';
import {
  loginUser,
  setEmail,
  setPassword,
  validateEmail,
  validatePassword,
} from '@store/users/usersSlice';
import userSelectors from '@store/users/users-selectors';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginRefEmail = createRef(null);
  const loginRefPassword = createRef(null);

  useEffect(() => {
    loginRefEmail.current.focus();
  }, []);

  const setUserEmail = (event) => {
    dispatch(setEmail({ email: event.target.value }));
    dispatch(validateEmail());
  };

  const setUserPassword = (event) => {
    dispatch(setPassword({ password: event.target.value }));
    dispatch(validatePassword());
  };

  const email = useSelector(userSelectors.getUserEmail);
  const password = useSelector(userSelectors.getUserPassword);
  const checkEmail = useSelector(userSelectors.getValidEmail);
  const checkPassword = useSelector(userSelectors.getValidPassword);

  const login = () => {
    dispatch(
      loginUser({
        email,
        password,
      }),
    );
  };
  return (
    <div className="RegisterPage">
      <section>
        <h1>Login</h1>
      </section>
      <CustomInput
        name="email"
        label="email"
        id="email"
        ref={loginRefEmail}
        setData={setUserEmail}
        validate={checkEmail}
      />
      <CustomInput
        name="password"
        label="password"
        id="password"
        ref={loginRefPassword}
        setData={setUserPassword}
        validate={checkPassword}
      />
      <Link to="/register">
        <p>Register</p>
      </Link>
      <button type="button" onClick={login}>
        <Link to="/">Login</Link>
      </button>
    </div>
  );
};

export default LoginPage;
