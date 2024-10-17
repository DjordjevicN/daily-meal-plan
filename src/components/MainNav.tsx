import React from "react";
import { Link } from "react-router-dom";

export const MainNav = () => {
  return (
    <div>
      <ul className="flex gap-3">
        <li className="border">
          <Link to="/">Home</Link>
        </li>
        <li className="border">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};
