// Project files
import OrderConcise from "./components/OrderConcise";
import Information from "./data/orders.json";
import "./styles/pages/style.css";

export default function App() {
  // Components
  const orderConciseArray = Information.map((item) => (
    <OrderConcise information={item} />
  ));

  return (
    <div className="App">
      <p>Testing</p>
      <div className="list">
      {orderConciseArray}
      </div>      
    </div>
  );
}
