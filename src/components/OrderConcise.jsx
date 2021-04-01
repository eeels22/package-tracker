import {status, sender} from "../data/orders.json";
import { StatusIcon } from "./StatusIcon";

export default function OrderConcise() {

  return (
    <div className="OrderConcise">
      <StatusIcon orderStatus={status} />
      <p className="sender">{sender}</p>
      <p className="status">{status}</p>
    </div>
  );
}
