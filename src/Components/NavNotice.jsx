import React from "react";
import "./nav.css";

function NavNotice() {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          <span>You have 4 new Notifications</span>
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View All
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div className="notification-content">
            <h6>Lorem Ipsum</h6>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p className="small text-muted">30 min. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i className="bi bi-x-circle text-danger"></i>
          <div className="notification-content">
            <h6>Atque rerum nesciunt</h6>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p className="small text-muted">1 hr. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i className="bi bi-check-circle text-success"></i>
          <div className="notification-content">
            <h6>Sit rerum fuga</h6>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p className="small text-muted">2 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="notification-item">
          <i className="bi bi-info-circle text-primary"></i>
          <div className="notification-content">
            <h6>Dicta reprehenderit</h6>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p className="small text-muted">4 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>
      </ul>
    </li>
  );
}

export default NavNotice;
