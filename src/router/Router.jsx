import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '@constants/routes';
import PrivateRouter from '@router/PrivateRouter';
import Layout from '@common/Layout/Layout';
import { ThemeProvider } from '@providers/ThemeProvider';

const Router = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          {routes.map((route) => (!route.private ? (
            <Route path={route.path} key={route.id} element={route.element} />
          ) : (
            <Route
              path={route.path}
              key={route.id}
              element={<PrivateRouter>{route.element}</PrivateRouter>}
            />
          )))}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default Router;
