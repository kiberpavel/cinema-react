import { configureStore } from '@reduxjs/toolkit';
import filmReducer from '@store/films/filmSlice';
import advertiseReducer from '@store/advertise/advertiseSlice';
import hallsReducer from '@store/halls/hallSlice';
import seancesReducer from '@store/seances/seancesSlice';
import usersReducer from '@store/users/usersSlice';

const store = configureStore({
  reducer: {
    films: filmReducer,
    advertise: advertiseReducer,
    halls: hallsReducer,
    seances: seancesReducer,
    users: usersReducer,
  },
});

export default store;
