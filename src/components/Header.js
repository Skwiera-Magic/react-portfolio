import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <ul className="nav nav-tabs bg-info">
    <li className="nav-item">
      <NavLink
        to="/react-portfolio"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link active bg-primary text-white' : 'nav-link text-black'
        }
      >
        Home
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/react-portfolio/project-gallery/"
        className={({ isActive }) =>
          isActive ? 'nav-link active bg-primary text-white' : 'nav-link text-black'
        }
      >
        Project Gallery
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/react-portfolio/contact/"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link active bg-primary text-white' : 'nav-link text-black'
        }
      >
        Contact
      </NavLink>
    </li>
  </ul>
  );
}

export default Header;
