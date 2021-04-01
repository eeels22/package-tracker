// NPM Package
import { Link } from "react-router-dom";

// Project files

import StatusIcon from "./StatusIcon";
import StatusWording from "./StatusWording";

export default function OrderConcise({ information }) {
  return (
    <div className="OrderConcise">
      <div className="left">
        <StatusIcon orderStatus={information.status} />
      </div>
      {/* =========TODO Check this link===========*/}
      <Link to={`result/${information.id}`}>
        <div className="right">
          <p className="sender">{information.sender}</p>
          <StatusWording orderStatus={information.status} />
        </div>
      </Link>
    </div>
  );
}
