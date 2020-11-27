import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { HashRouter, Route, Switch } from "react-router-dom";
const Defaultlayout = React.lazy(() => import("./container/defaultlayout"));

const loading = () => (
  <div className="animated fadeIn pt-1 text-center">Loading...</div>
);
function App() {
  return (
    <HashRouter>
      {/* <ReactNotification /> */}
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route
            path="/"
            name=""
            render={(props) => <Defaultlayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
