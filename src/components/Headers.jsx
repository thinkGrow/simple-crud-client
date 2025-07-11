import React from "react";
import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <h3>Headers</h3>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
    </div>
  );
};

export default Headers;
