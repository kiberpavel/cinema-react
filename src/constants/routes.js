import React from 'react';
import FilmPage from '@feature/FilmPage/FilmPage';
import FilmCreatePage from '@feature/FilmCreatePage/FilmCreatePage';
import HallCreatePage from '@feature/HallCreatePage/HallCreatePage';
import RegisterPage from '@feature/RegisterPage/RegisterPage';
import LoginPage from '@feature/LoginPage/LoginPage';
import useSuspense from '@hooks/useSuspense';

const CinemaHalls = React.lazy(() => import('@feature/CinemaHallsPage/CinemaHalls'));
const CinemaHallsSuspense = useSuspense(CinemaHalls);

const routes = [
  {
    id: 1,
    path: '/',
    element: <FilmPage />,
    private: false,
  },
  {
    id: 2,
    path: '/create',
    element: <FilmCreatePage />,
    private: true,
  },
  {
    id: 3,
    path: '/halls',
    element: CinemaHallsSuspense,
    private: false,
  },
  {
    id: 4,
    path: '/create-hall',
    element: <HallCreatePage />,
    private: true,
  },
  {
    id: 5,
    path: '/register',
    element: <RegisterPage />,
    private: false,
  },
  {
    id: 6,
    path: '/login',
    element: <LoginPage />,
    private: false,
  },
];

export default routes;
