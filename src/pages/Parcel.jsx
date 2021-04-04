// Project files
import Information from "../data/orders.json";
import OrderDetailed from "../components/OrderDetailed";

export default function Parcel({ match }) {
  // Constants
  const routerID = match.params.id;
  const parcel = Information.find((item) => item.parcel_id === routerID); // which id field?

  return (
    <div id="parcel" className="container">
      <h1>Parcel details</h1>
      <div>
        <OrderDetailed key={parcel.id} information={parcel} />
      </div>
    </div>
  );
}
