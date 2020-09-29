import React from "react";

const nav = () => {
  return (
    <ul className="nav">
      <li>
        <a href="/">Welcome</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      {/* <li>
        <a href="#">Projects</a>
      </li> */}
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
};

export default nav;
