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
      <h1>All parcels</h1>
      <div className="grid">{OrderArray}</div>
    </div>
  );
}
