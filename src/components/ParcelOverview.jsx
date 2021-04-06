// NPM Package
import { Link } from "react-router-dom";

// Project files
import StatusIcon from "./StatusIcon";
import StatusWording from "./StatusWording";
import Date from "./Date";

export default function ParcelOverview({ information }) {
  // Const
  const whetherArrived =
    information.status === "delivered" ||
    information.status === "ready-for-pickup"
      ? "Arrived on"
      : "Arriving on";

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
          <p className="location">Pick up from {information.location_name}</p>
        </div>
      </div>
    </Link>
  );
}
