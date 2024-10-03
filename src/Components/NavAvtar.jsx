import React from 'react';
import img from './Images/men.png';
import './NavAvtar.css';  

const NavAvtar = () => {
  return (
    <li className='nav-item dropdown pe-3'>
      <a href="#" className='nav-link nav-profile d-flex align-items-center pe-0' data-bs-toggle='dropdown'>
        <img src={img} alt="Profile" className='rounded-circle nav-avatar-img' />
        <span className='d-none d-md-block dropdown-toggle ps-2'>F. Devid</span>
      </a>
      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className='dropdown-header text-center'>
          <img src={img} alt="Avatar" className="rounded-circle dropdown-avatar-img mb-2"/>
          <h6 className="mb-0">Devid</h6>
          <span className="text-muted">Web Developer</span>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li>
          <a href="user-profile.html" className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-person me-2'></i>
            <span>My Profile</span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li>
          <a href="user-profile.html" className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-gear me-2'></i>
            <span>Account Settings</span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li>
          <a href="pages-faq.html" className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-question-circle me-2'></i>
            <span>Need Help?</span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li>
          <a href="#" className='dropdown-item d-flex align-items-center'>
            <i className='bi bi-box-arrow-right me-2'></i>
            <span>Sign Out</span>
          </a>
        </li>
      </ul>
    </li>
  );
};

export default NavAvtar;
