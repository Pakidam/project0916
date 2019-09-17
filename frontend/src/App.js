import React from "react";
import Table from "./components/Table";
import { Link, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="container">
      <h1>Send Money from here!</h1>

      <div className="flex-row">
        <div className="flex-large">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/table"> Table of all countries</Link>
            </li>
          </ul>
          <Route path="/table" component={Table} />
        </div>
      </div>
    </div>
  );
};

export default App;
