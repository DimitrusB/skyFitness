import { Navigate, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';
import React from 'react';

export const ProtectedRoute = ({ userData }) => {
  if (!userData) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};
ProtectedRoute.propTypes = {
  userData: PropTypes.object.isRequired,
};
