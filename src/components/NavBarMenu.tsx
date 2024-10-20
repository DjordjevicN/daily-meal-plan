import React from "react";
import { Link } from "react-router-dom";

export const NavBarMenu = () => {
  const linkStyle = `p-4 text-[16px]`;
  return (
    <div className="p-4 bg-menuColor rounded-t-lg">
      <ul>
        <li className={linkStyle}>
          <Link to="/">Home</Link>
        </li>
        <li className={linkStyle}>
          <Link to="/login">Login</Link>
        </li>
        <li className={linkStyle}>
          <Link to="/signin">Singin</Link>
        </li>
        <li className={linkStyle}>
          <Link to="/creator">Creator</Link>
        </li>
      </ul>
    </div>
  );
};
