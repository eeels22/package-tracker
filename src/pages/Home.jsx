export default function Home() {
  // Constants
  const imageObject = require(`../assets/YellowCorpVan.svg`);
  const imageURL = imageObject.default;

  return (
    <div id="home" className="container">
      <h1>Track your parcels with ease</h1>
      <img
        src={imageURL}
        alt="Illustration of a delivery van"
        className="image-van"
      />
    </div>
  );
}
