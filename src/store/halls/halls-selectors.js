const getHallState = (state) => {
  return state.halls;
};

const getAllHalls = (state) => {
  return state.halls.yourHalls;
};

export default { getHallState, getAllHalls };
