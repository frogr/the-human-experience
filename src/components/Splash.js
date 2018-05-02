import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div>
      <h1> Splash Page </h1>
      <h3>
        <Link to="/"> this page </Link>
        <Link to="/account"> account </Link>
        <Link to="/create/poll"> makepoll </Link>
        <Link to="/poll/1"> poll </Link>
        <Link to="/polls"> pollsdashboard </Link>
      </h3>
    </div>
  )
}

export default Splash;
