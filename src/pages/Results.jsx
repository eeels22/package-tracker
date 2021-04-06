// NPM package
import { useRecoilValue } from "recoil";
import {Link} from "react-router-dom";

// Project files
import { parcelState } from "../state/parcelData";
import ParcelOverview from "../components/ParcelOverview";


export default function Results({ match }) {
  // Global state
  const parcels = useRecoilValue(parcelState);

  // Constants
  const query = match.params.query.toUpperCase();
  const filteredResults = parcels.filter((item) =>
    item.sender.toUpperCase().match(query)
  );
  const FilteredOrderArray = filteredResults.map((item) => (
    <ParcelOverview key={item.id} information={item} />
  ));

  return (
    <div id="results" className="container">
      <h1>Search results</h1>
      <div className="results-grid">
        {filteredResults.length > 0 ? (
          FilteredOrderArray
        ) : (
          <p>No results found. Try another search term.</p>
        )}
        <hr />
        <Link className="back-link" to="/list">
          ⬅ Back to all parcels
        </Link>
      </div>
    </div>
  );
}
