// Project files
import OrderConcise from "./components/OrderConcise";
import OrderDetailed from "./components/OrderDetailed";
import Information from "./data/orders.json";
import "./styles/style.css";

export default function App() {
  //Components
  const orderConciseArray = Information.map((item) => (
    <OrderConcise key={item.id} information={item} />
  ));

  const orderDetailedArray = Information.map((item) => (
    <OrderDetailed key={item.id} information={item} />
  ));

  return (
    <div className="App">
      <h1>Testing</h1>
      <h2>Detailed</h2>
      <div className="list">
      {orderDetailedArray}  c
      <h2>Concise</h2>
      {orderConciseArray}  
      
      </div>      
    </div>
  );
}
