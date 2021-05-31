// NPM package
import { useState } from "react";
import { Link } from "react-router-dom";
import i18n from "../i18n";

// Project files
import SearchBar from "./SearchBar";

export default function Header() {
  // Local state
  const [language, setLanguage] = useState("en");

  //Constants
  const logoHeaderObject = require(`../assets/logo.png`);
  const logoHeaderURL = logoHeaderObject.default;
  const enObject = require(`../assets/en.png`);
  const enURL = enObject.default;
  const seObject = require(`../assets/se.png`);
  const seURL = seObject.default;

  // Methods
  function onClick() {
    if (language === "en") {
      i18n.changeLanguage("se");
      setLanguage("se");
    } else if (language === "se") {
      i18n.changeLanguage("en");
      setLanguage("en");
    }
  }

  return (
    <header className="Header">
      <div className="language-selector" onClick={onClick}>
        <span className="language-name">
          {language === "en" && "Svenska"}
          {language === "se" && "English"}
        </span>
        {language === "en" && (
          <img src={seURL} alt="Swedish flag" className="flag" />
        )}
        {language === "se" && (
          <img src={enURL} alt="UK flag" className="flag" />
        )}
      </div>

      <div className="logoSearch">
        <Link to="/">
          <img src={logoHeaderURL} alt="YellowCorp logo" className="logo" />
        </Link>
        <SearchBar />
      </div>
    </header>
  );
}
