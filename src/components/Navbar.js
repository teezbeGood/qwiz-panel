import React, {useContext} from 'react'
import {AuthContext} from "../context/auth/authContext";
import {NavLink} from "react-router-dom";

export const Navbar = () => {

  const {logout} = useContext(AuthContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a href="/" className="navbar-brand">
        <img src="https://static.tildacdn.com/tild6231-6633-4639-b661-363138356662/logo_rzd.gif"
             style={{maxWidth: '90px', width: '90px'}} alt=""/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarText">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/"
            >
              Команды
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/rights"
            >
              Ответы
            </NavLink>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://dorogi-pobedi.web.app/"
            >
              На сайт игры
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="http://xn-----6kcknacavg0ajiihs1akr4re3d.xn--p1ai/"
            >
              память-сильнее-времени.рф
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/"
              onClick={logout}
            >
              Выйти
            </a>
          </li>
        </ul>
      </div>
      <div className="position-absolute hr-line">
        <hr style={{margin: '0 20px', backgroundColor: '#e73728', height: '7px', border: '0'}} />
      </div>
    </nav>
  )
}