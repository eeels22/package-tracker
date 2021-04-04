// NPM packages
// import { Link } from "react-router-dom";

// import Information from "../data/orders.json";

export default function Home() {
  // Constants
  const imageObject = require(`../assets/YellowCorpVan.svg`);
  const imageURL = imageObject.default;

  return (
    <div id="home" className="container">
      <img
        src={imageURL}
        alt="Illustration of a delivery van"
        className="image-van"
      />
      <h1>Welcome</h1>
      <p>Enter your username to see your parcels</p>
    </div>
  );
}
