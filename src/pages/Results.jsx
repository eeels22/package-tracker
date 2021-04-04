// Project files
import Information from "../data/orders.json";
import OrderConcise from "../components/OrderConcise";

export default function Results({ match }) {
  // Constants
  const query = match.params.query.toUpperCase();
  const filteredResults = Information.filter((item) =>
    item.sender.toUpperCase().match(query)
  );
  const FilteredOrderArray = filteredResults.map((item) => (
    <OrderConcise key={item.id} information={item} />
  ));

  return (
    <div id="results" className="container">
      <h1>Search results</h1>
      <div className="results-grid">{FilteredOrderArray}</div>
    </div>
  );
}
