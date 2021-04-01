// NPM packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Project files
import Header from "./components/Header";
import Home from "./pages/Home";
import Parcels from "./pages/Parcels";
import Results from "./pages/Results";
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Parcels} path="/parcels/:id" />
          <Route component={Results} path="/results/:id" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
