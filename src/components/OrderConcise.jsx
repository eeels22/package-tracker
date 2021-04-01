import Information from "../data/orders.json";
import { StatusIcon } from "./StatusIcon";

export default function OrderConcise() {
  return (
    <div className="OrderConcise">
      <StatusIcon orderStatus={Information.status} />
      <p className="sender">{Information.sender}</p>
      <p className="status">{Information.status}</p>
    </div>
  );
}
