// NPM packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Project files
import Header from "./components/Header";
import Home from "./pages/Home";
import List from "./pages/List";
import Results from "./pages/Results";
import Parcel from "./pages/Parcel";
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/list" exact component={List} />
          <Route path="/results/:query" component={Results} />
          <Route path="/parcel/:id" exact component={Parcel} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
