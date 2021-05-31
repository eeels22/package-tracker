// NPM packages
import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";

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
      <RecoilRoot>
        <Suspense fallback="Loading...">
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/list" exact component={List} />
              <Route path="/results/:query" component={Results} />
              <Route path="/parcel/:id" exact component={Parcel} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </RecoilRoot>
    </div>
  );
}
