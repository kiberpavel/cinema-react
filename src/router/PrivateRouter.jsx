import React from 'react';
import { useSelector } from 'react-redux';
import userSelectors from '@store/users/users-selectors';
import { Navigate } from 'react-router-dom';
import { element } from 'prop-types';

const PrivateRouter = ({ children }) => {
  const status = useSelector(userSelectors.getUserStatus);
  return status === 'resolved' ? children : <Navigate to="/login" />;
};

PrivateRouter.propTypes = {
  children: element.isRequired,
};

export default PrivateRouter;
