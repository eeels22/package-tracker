// NPM Package
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Project files
import StatusIcon from "./StatusIcon";
import StatusWording from "./StatusWording";
import Date from "./Date";

export default function ParcelOverview({ information }) {
  // Constants
  const { t } = useTranslation();

  const whetherArrived =
    information.status === "delivered" ||
    information.status === "ready-for-pickup"
      ? t("listView.arrivedOn")
      : t("listView.arrivingOn");

  return (
    <Link to={`/parcel/${information.parcel_id}`} className="parcel-link">
      <div className="ParcelOverview">
        <div className="left">
          <StatusIcon orderStatus={information.status} />
        </div>
        <div className="right">
          <p className="sender">{information.sender}</p>
          <StatusWording orderStatus={information.status} />
          <p className="eta">
            {whetherArrived} <Date dateString={information.eta} />
          </p>
          <p className="location">
            {t("listView.pickup")} {information.location_name}
          </p>
        </div>
      </div>
    </Link>
  );
}
