import React from "react";
import Avatar from "../../UiComponents/atom/avatar/Avatar";

import Paper from "../../UiComponents/atom/paper/Paper";

import "./SignIn.scss";
const SignIn = () => {
  return (
    <div className="signin">
      <div className="signin__content">
        <Paper>
          <div className="warning">
            <Avatar size="150px" />
            <h1>Project is currently in closed alpha phase</h1>
            <p>
              A Closed Alpha is an early testing period with a limited number of
              users and a small sample of content from the full app. This is a
              work-in-progress product and users are likely to experience some
              issues that will affect their experience.
            </p>
          </div>
          <div className="action">
            <a href="/">Go Home</a>
            <a
              href="https://www.linkedin.com/in/nikola-djordjevic-503066193/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default SignIn;
