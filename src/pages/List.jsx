// Project files
import Information from "../data/orders.json";
import OrderConcise from "../components/OrderConcise";

export default function List() {
  // Constants
  const OrderArray = Information.map((item) => (
    <OrderConcise key={item.id} information={item} />
  ));

  return (
    <div id="parcels" className="container">
      <div className="text-intro">
        <h1>All parcels</h1>
        <p>
          Click on a parcel for full details, or use the search bar above to
          filter results.
        </p>
      </div>
      <div className="grid">{OrderArray}</div>
    </div>
  );
}
