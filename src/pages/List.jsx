// NPM Packages
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

// Project files
import OrderConcise from "../components/OrderConcise";
import backupInfo from "../data/orders.json";
import { parcelState } from "../state/parcelData";

export default function List() {
  // Global state
  const [parcels, setParcels] = useRecoilState(parcelState); // array to hold the parcel data

  // Local state
  const [status, setStatus] = useState(0); // 0 = loading data, 1 = data loaded, 2 = error, use backup data;

  // Constants
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
  const ParcelsArray = parcels.map((item) => (
    <OrderConcise key={item.id} information={item} />
  ));

  // Methods
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => onFetchSuccess(json))
      .catch((error) => onFetchFail(error));
  }, [setStatus, setParcels]);

  function onFetchSuccess(json) {
    setParcels(json);
    setStatus(1);
  }

  function onFetchFail(error) {
    console.log(
      "Failed to fetch data from API, using backup data for demo purposes instead. Error:",
      error
    );
    setParcels(backupInfo);
    setStatus(2);
  }

  return (
    <div id="parcels" className="container">
      <div className="text-intro">
        <h1>All parcels</h1>
        <p>
          Click on a parcel for full details, or use the search bar above to
          filter results by sender.
        </p>
      </div>
      <div className="grid">
        {status === 0 && <p>Loading parcels...</p>}
        {status === 1 && ParcelsArray}
        {status === 2 && ParcelsArray}
      </div>
      <hr />
      <Link className="link" to="/">
        ⬅ Back to home
      </Link>
    </div>
  );
}
