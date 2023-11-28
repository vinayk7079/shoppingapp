import React, { Fragment } from "react";
import RightCartIcon from "../Cart/RightCartIcon";

function Footer() {
  return (
    <Fragment>
      <RightCartIcon />
      <div className="text-center bg-dark text-white py-2 fixed-bottom">
        <span>
          Copyright & Developed by{" "}
          <a href="https://www.linkedin.com/in/vinay-kumar29/" target="blank">
            Vinay
          </a>
        </span>
      </div>
    </Fragment>
  );
}

export default Footer;
