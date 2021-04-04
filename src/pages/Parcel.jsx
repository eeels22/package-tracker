// NPM package
import { Link } from "react-router-dom";

// Project files
import Information from "../data/orders.json";
import OrderDetailed from "../components/OrderDetailed";

export default function Parcel({ match }) {
  // Constants
  const routerID = match.params.id;
  const parcel = Information.find((item) => item.id === routerID); // should it be parvel_id instead?

  return (
    <div id="parcel" className="container">
      <h1>Parcel details</h1>
      <div className="OrderDetailed">
        <OrderDetailed key={parcel.id} information={parcel} />
      </div>
      <Link className="back-to-home" to="/">
        Back to home
      </Link>
    </div>
  );
}
