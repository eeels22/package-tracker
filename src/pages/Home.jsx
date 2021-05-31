// NPM package
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  // Constants
  const imageObject = require(`../assets/YellowCorpVan.svg`);
  const imageURL = imageObject.default;
  const { t } = useTranslation();

  return (
    <div id="home" className="container">
      <img
        src={imageURL}
        alt="Illustration of a delivery van and route map"
        className="image-van"
      />
      <h1>{t("homeView.title")}</h1>
      <h2>{t("homeView.viewAll")}</h2>
      <p>{t("homeView.getOverview")}</p>
      <Link to="/list" className="link">
        {t("homeView.viewAll")}
      </Link>
      <h2>{t("homeView.searchOption")}</h2>
      <p>{t("homeView.searchCTA")}</p>
    </div>
  );
}
