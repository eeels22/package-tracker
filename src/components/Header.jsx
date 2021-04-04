// NPM package
import { Link } from "react-router-dom";

// Project files
import SearchBar from "./SearchBar";

export default function Header() {
  //Constants
  const logoHeaderObject = require(`../assets/logo.svg`);
  const logoHeaderURL = logoHeaderObject.default;

  return (
    <header className="Header">
      <Link to="/">
        <img
          src={logoHeaderURL}
          alt="YellowCorp logo"
          className="logo-header"
        />
      </Link>
      <SearchBar/>
    </header>
  );
}
