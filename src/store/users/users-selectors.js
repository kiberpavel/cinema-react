const getUserEmail = (state) => {
  return state.users.email;
};

const getName = (state) => {
  return state.users.username;
};

const getUserPassword = (state) => {
  return state.users.password;
};

const getValidEmail = (state) => {
  return state.users.emailError;
};

const getValidUsername = (state) => {
  return state.users.usernameError;
};

const getValidPassword = (state) => {
  return state.users.passwordError;
};

const getUserStatus = (state) => {
  return state.users.loginStatus;
};

export default {
  getUserEmail,
  getName,
  getUserPassword,
  getValidEmail,
  getValidUsername,
  getValidPassword,
  getUserStatus,
};
