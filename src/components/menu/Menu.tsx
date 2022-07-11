import React from "react";
import "./Menu.scss";

function Menu() {
  return (
    <div className="navMenu">
      <div className="content">
        <div className="logo">
          <p>MDM</p>
        </div>
        <div className="navigation">
          <a href="/">HOME</a>
          <a href="/shopping">SHOPPING</a>
          <a href="/login">LOGIN</a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
