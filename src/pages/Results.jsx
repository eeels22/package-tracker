// NPM package
import { useRecoilValue } from "recoil";

// Project files
import {parcelState} from "../state/parcelData";
import OrderConcise from "../components/OrderConcise";

export default function Results({ match }) {
  // Global state
  const parcels = useRecoilValue(parcelState);

  // Constants
  const query = match.params.query.toUpperCase();
  const filteredResults = parcels.filter((item) =>
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
