// NPM package
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Project files
import { parcelState } from "../state/parcelData";
import ParcelOverview from "../components/ParcelOverview";

export default function Results({ match }) {
  // Global state
  const parcels = useRecoilValue(parcelState);

  // Constants
  const { t, i18n } = useTranslation();

  const query = match.params.query.toUpperCase();
  const filteredResults = parcels.filter((item) =>
    item.sender.toUpperCase().match(query)
  );
  const FilteredOrderArray = filteredResults.map((item) => (
    <ParcelOverview key={item.id} information={item} />
  ));

  return (
    <div id="results" className="container">
      <h1>{t("resultsView.title")}</h1>
      <div className="results-grid">
        {filteredResults.length > 0 ? (
          FilteredOrderArray
        ) : (
          <p>{t("resultsView.noResults")}</p>
        )}
        <hr />
        <div className="center">
          <Link className="back-link" to="/list">
            ⬅ {t("resultsView.back")}
          </Link>
        </div>
      </div>
    </div>
  );
}
