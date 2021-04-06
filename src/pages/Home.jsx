// NPM package
import { Link } from "react-router-dom";

export default function Home() {
  // Constants
  const imageObject = require(`../assets/YellowCorpVan.svg`);
  const imageURL = imageObject.default;

  return (
    <div id="home" className="container">
      <img
        src={imageURL}
        alt="Illustration of a delivery van and route map"
        className="image-van"
      />
      <h1>Track your parcels with ease</h1>
      <h2>View all parcels</h2>
      <p>Get an overview of all tracked parcels.</p>
      <Link to="/list" className="link">View all parcels</Link>
      <h2>Or search for a parcel by sender name</h2>
      <p>Use the search bar above to find parcels from a particular sender.</p>
    </div>
  );
}
