import React from 'react';
import { Link } from 'react-router-dom';

const DebugRoutes = () => {
  return (
    <div>
      <h3 className="debug">
        <Link to="/"> [splash] </Link>
        <Link to="/account"> [account] </Link>
        <Link to="/create/poll"> [make poll] </Link>
        <Link to="/poll/1"> [poll] </Link>
        <Link to="/polls"> [polls dashboard] </Link>
      </h3>
    </div>
  )
}

export default DebugRoutes;
