import React from "react";

function NavMassage() {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow massages">
        <li className="dropdown-header">
          You have 3 new Messages{" "}
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              {" "}
              view all
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="massage-item">
          <a href="#">
            <img
              src="assets/img/messages-1.jpg"
              alt=""
              className="rounded-circle"
            />
          </a>
          <div className="notification-content">
            <h6>Maria Hudson</h6>
            <p>
              velit asperiores et ducimus soluta repudiandae labore officia est
              ut..{" "}
            </p>
            <p>4 hrs ago</p>
          </div>
        </li>
        <br />
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-2.jpg"
              alt=""
              className="rounded-circle"
            />
          </a>
          <div className="notification-content">
            <h6>Anna Nelson</h6>
            <p>
              Velit asperiores et ducimus soluta repudiandae labore officia est
              ut...
            </p>
            <p>6 hrs ago</p>
          </div>
        </li>{" "}
        <br />
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-3.jpg"
              alt=""
              className="rounded-circle"
            />
          </a>
          <div className="notification-content">
            <h6>David Muldon</h6>
            <p>
              Velit asperiores et ducimus soluta repudiandae labore officia est
              ut...
            </p>
            <p>8 hrs ago</p>
          </div>
        </li>{" "}
        <br />
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="dropdown-footer">
          <a href="#">Show all Messages</a>
        </li>
      </ul>
    </li>
  );
}

export default NavMassage;
