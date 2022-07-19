import React, { useEffect, useState } from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";

function Menu() {
  const [local, setLocal] = useState(true);

  useEffect(() => {
    if (window.location.hostname === "localhost") {
      setLocal(true);
    } else {
      setLocal(false);
    }
  }, [local]);

  return (
    <div className="navMenu">
      <div className="content">
        <div className="logo">
          <p>MDM</p>
        </div>
        {window.location.hostname === "localhost" ? (
          <div className="navigation">
            <a href="/">HOME</a>
            <a href="/shopping">SHOPPING</a>
            <a href="/plan">PLAN</a>
            <a href="/login">LOGIN</a>
          </div>
        ) : (
          <div className="navigation">
            <Link to="/">HOME</Link>
            <Link to="/shopping">SHOPPING</Link>
            <Link to="/plan">PLAN</Link>
            <Link to="/login">LOGIN</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
