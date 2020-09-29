import React from "react";
import { Link } from "@reach/router";

const nav = () => {
  return (
    <ul className="nav">
      <li>
        <Link to={process.env.PUBLIC_URL + "/"}>Welcome</Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL + "/about/"}>About</Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
      </li>
    </ul>
  );
};

export default nav;
