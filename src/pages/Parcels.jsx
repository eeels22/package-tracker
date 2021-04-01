// NPM packages
import Information from "../data/orders.json";
import OrderConcise from "../components/OrderConcise";


export default function Overview() {
  // Constants
  const orderConciseArray = Information.map((item) => (
    <OrderConcise key={item.id} information={item} />
  ));

  return (
    <div id="parcels" className="container">
      <h1>Your parcels</h1>
      {orderConciseArray}
    </div>
  );
}
