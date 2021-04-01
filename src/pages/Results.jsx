// NPM packages
import Information from "./data/orders.json";
import OrderDetailed from "./components/OrderDetailed";

export default function Results() {
  // Constants
  const orderDetailedArray = Information.map((item) => (
    <OrderDetailed key={item.id} information={item} />
  ));

  return (
    <div id="results" className="container">
      <h1>Parcel details</h1>
      {orderDetailedArray}
    </div>
  );
}
