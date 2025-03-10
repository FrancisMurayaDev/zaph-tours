import "./Header.css";
import LogoImage from "../LogoImage/LogoImage";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <TopHeader />
      <HeaderNavBar />
    </header>
  );
}

function TopHeader() {
  return (
    <div className="top-header">
      <Logo />
      <Button />
    </div>
  );
}

function Logo() {
  return <h1 className="logo-text">zaph tours</h1>;
}

function Button() {
  return (
    <a href="#" className="header-button">
      Contact Us
    </a>
  );
}

function HeaderNavBar() {
  return (
    <div className="nav-bar">
      <LogoImage />
      <nav className="header-nav">
        <ol className="header-nav-list">
          <NavigationLink to="" label="Home" />
          <NavigationLink to="/destination" label="Destination" />
          <NavigationLink to="/trip-types" label="Trip Types" />
          <NavigationLink to="/contact" label="Contact" />
        </ol>
      </nav>
    </div>
  );
}

function NavigationLink({ to, label }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive === true ? "active-link" : "navigation-list"
        }
      >
        {label}
      </NavLink>
    </li>
  );
}
