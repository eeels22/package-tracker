// NPM package
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";

// Project files
import { parcelState } from "../state/parcelData";
import ParcelDetailed from "../components/ParcelDetailed";

export default function Parcel({ match }) {
  // Global state
  const parcels = useRecoilValue(parcelState);

  // Constants
  const { t } = useTranslation();
  const routerID = match.params.id;
  const parcel = parcels.find((item) => item.parcel_id === routerID);

  return (
    <div id="parcel" className="container">
      <h1>{t("parcelView.title")}</h1>
      <div className="ParcelDetailed">
        <ParcelDetailed key={parcel.id} information={parcel} />
      </div>
      <hr />
      <div className="center">
        <Link className="back-link" to="/list">
          ⬅ {t("parcelView.back")}
        </Link>
      </div>
    </div>
  );
}
