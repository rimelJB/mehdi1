import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
            <i class="ri-door-lock-box-line"></i> ONLINE Education
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" >
              <ul className="nav__list">
                  <li  className="nav__item">
                  <Link to="/Home">Home</Link>   
                  </li>
                  <li  className="nav__item">
                  <Link to="/Courses"><a>Courses</a></Link>   
                  </li>
                  <li  className="nav__item">
                  <a href="/Home#About">About</a>   
                  </li>
                  <li  className="nav__item">
                  <a href="/Home">Blog</a>   
                  </li>
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> 20 705 541
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;