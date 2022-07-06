import React from "react";
import Router from "../src/router/Router";
import GlobalState from "../src/globalState/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
};
export default App;
