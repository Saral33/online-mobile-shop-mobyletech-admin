import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Logo from './assests/logo.png';

const PrivateRoute = ({ history, component: Component, ...rest }) => {
  const { success, loading } = useSelector((state) => state.auth);

  return !loading && !success ? (
    <Redirect to="/login" />
  ) : loading ? (
    <div className="loading-indicator">
      <div className="coin">
        <img className="logo-coin" src={Logo} alt="logo" />
      </div>
    </div>
  ) : (
    !loading && (
      <Route
        {...rest}
        render={(props) => success && <Component {...props} {...rest} />}
      />
    )
  );
};

export default PrivateRoute;
