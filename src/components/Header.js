import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <ul className="nav nav-tabs">
    <li className="nav-item">
      <NavLink
        to="/react-portfolio"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Home
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/react-portfolio/project"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Project
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/react-portfolio/project-gallery"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Project Gallery
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/react-portfolio/contact"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Contact
      </NavLink>
    </li>
  </ul>
  );
}

export default Header;
