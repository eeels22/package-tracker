// NPM pacakge
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTruck,
  faParachuteBox,
  faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons";

export default function StatusIcon(orderStatus) {
  return (
    <div className="StatusIcon">
      {/* Swtich icon depending on order status */}
      {orderStatus === "order-info-received" && (
        <FontAwesomeIcon icon={faSatelliteDish} />
      )}
      {orderStatus === "on-the-way" && <FontAwesomeIcon icon={faTruck} />}
      {orderStatus === "delivered" && <FontAwesomeIcon icon={faCheckCircle} />}
      {orderStatus === "ready-for-pickup" && (
        <FontAwesomeIcon icon={faParachuteBox} />
      )}
    </div>
  );
}
