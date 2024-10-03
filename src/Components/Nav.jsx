import React from "react";
import "./nav.css";
import NavNotice from "./NavNotice";
import NavMassage from "./NavMassage";
import NavAvtar from "./NavAvtar";

function Nav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <NavNotice />
        <NavMassage />
        <NavAvtar />
      </ul>
    </nav>
  );
}

export default Nav;
