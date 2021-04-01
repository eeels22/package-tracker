// Project files
import StatusIcon from "./StatusIcon";
import StatusWording from "./StatusWording";

export default function OrderConcise({ information }) {
  return (
    <div className="OrderConcise">
      <div className="left">
        <StatusIcon orderStatus={information.status} />
      </div>
      <div className="right">
        <p className="sender">{information.sender}</p>
        <StatusWording orderStatus={information.status} />
      </div>
    </div>
  );
}
