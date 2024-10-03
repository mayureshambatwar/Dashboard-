import React from "react";
import "./sidebaar.css";
import navList from "../Data/NavItem";
import NavItem from "./NavItem";
import { sidebarData } from "./SideBarData";
function SideBaar() {
  return (
    <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      {sidebarData.map((item, index) => (
        <li key={index} className="nav-item">
          <a
            href={item.link}
            className={`nav-link ${item.subItems ? "collapsed" : ""}`}
            data-bs-target={`#submenu-${index}`}
            data-bs-toggle={item.subItems ? "collapse" : ""}
          >
            <i className={item.icon}></i>
            <span>{item.title}</span>
            {item.subItems && <i className="bi bi-chevron-down ms-auto"></i>}
          </a>
          {item.subItems && (
            <ul
              className="nav-content collapse"
              id={`submenu-${index}`}
              data-bs-parent="#sidebar-nav"
            >
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <a href={subItem.link}>
                    <i className={subItem.icon}></i>
                    <span>{subItem.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    <li className="nav-heading">Pages</li>
    {navList.map(nav=>(
       <NavItem  key={nav._id} nav={nav}/>
    ))}
    </ul>
  </aside>
  );
}

export default SideBaar;
