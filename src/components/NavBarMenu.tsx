import React from "react";
import { Link } from "react-router-dom";

export const NavBarMenu = () => {
  const linkStyle = `p-4 text-[16px] cursor-pointer`;
  return (
    <div className="p-4 bg-dark rounded-t-lg">
      <ul>
        <li className={linkStyle}>
          <Link className="text-light" to="/">
            Home
          </Link>
        </li>
        <li className={linkStyle}>
          <Link className="text-light" to="/login">
            Login
          </Link>
        </li>
        <li className={linkStyle}>
          <Link className="text-light" to="/signin">
            Singin
          </Link>
        </li>
        <li className={linkStyle}>
          <Link className="text-light" to="/creator">
            Creator
          </Link>
        </li>
      </ul>
    </div>
  );
};
