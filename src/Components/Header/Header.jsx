import "./Header.css";
import LogoImage from "../LogoImage/LogoImage";

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
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Trip Types</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}
