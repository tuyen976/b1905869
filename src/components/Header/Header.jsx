import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <img
            src="https://b1907097.github.io/N1_KC326/Trangchu_files/0305-logo-ctu.png"
            alt=""
          />
        </div>
        <div className="header-content">
          <ul className="header-ul">
            <NavLink to="/">Trang chủ</NavLink>
            <NavLink to="/members">Thành viên</NavLink>
            <NavLink to="/Product">Sản phẩm</NavLink>
            <NavLink to="/Chart">Thống kê</NavLink>
            <NavLink to="/">Thông tin thêm</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
