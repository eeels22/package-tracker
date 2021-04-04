// NPM package
import {Link} from "react-router-dom";

export default function Home() {
  // Constants
  const imageObject = require(`../assets/YellowCorpVan.svg`);
  const imageURL = imageObject.default;

  return (
    <div id="home" className="container">
      <h1>Track your parcels with ease</h1>
      <h2>1. View all parcels</h2>
      <Link to="/list">View all parcels</Link>
      <h2>2. Search for a parcel by sender</h2>
      <p>Use the search bar above to find parcels from a particular sender.</p>

      <img
        src={imageURL}
        alt="Illustration of a delivery van"
        className="image-van"
      />
    </div>
  );
}
