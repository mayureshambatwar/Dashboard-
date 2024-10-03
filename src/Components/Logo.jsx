import React from "react";
import './logo.css';
function Logo(){
    const heandleToggleSideBar = () => {
        document.body.classList.toggle("toggle-sidebar");
    }
    return(
        <div className="d-flex align-items-center justify-content-between">
            <a href="" className="logo d-flex align-items-center">
                {/* <img src="" alt="" /> */}
                <span className="d-none d-lg-block">Admin Dashboard</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn" onClick={heandleToggleSideBar}></i>

        </div>
    )
}
export default Logo