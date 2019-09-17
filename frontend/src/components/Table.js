import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Details from "./Details";
const builtApi = "http://localhost:3001/countries";
// const baseUrl = "https://restcountries.eu/rest/v2/all";

const Table = ({ match }) => {
  const [isLoaded, setLoaded] = useState(true);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get(builtApi)
      .then(response => response.data)
      .then(data => {
        setCountries(data);
      });
  }, []);

  const countryRow = countries.map((item, index) => (
    <tr key={index}>
      <Link to={`${match.url}/${item.Code}`}>
        <td>{item.Name}</td>
      </Link>
    </tr>
  ));

  if (!isLoaded) {
    return <div>Loading....</div>;
  } else
    return (
      <div className="flex-row">
        <div className="flex-large">
          <table>
            <thead>
              <th>Country</th>
            </thead>
            <tbody>
              <td>{countryRow}</td>
            </tbody>
          </table>
        </div>
        <div className="flex-large">
          <Route
            path={`${match.url}/:countryCode`}
            render={() => (
              <div>
                <h4>Country selected!</h4>
              </div>
            )}
          />
          <Route
            exact
            path={match.url}
            render={() => (
              <div>
                <h4>Please select a country</h4>
              </div>
            )}
          />
        </div>
      </div>
    );
};
export default Table;
