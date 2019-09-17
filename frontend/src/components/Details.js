import React, { useState } from "react";
import axios from "axios";

const baseUrl = "https://restcountries.eu/rest/v2/all";

const Details = ({ match }) => {
  const [country, setCountry] = useState([]);
  const countries = axios
    .get(baseUrl)
    .then(response => response.data)
    .then(data => {
      setCountry(data);
    });

  const countryDetails = country.find(
    p => p.alpha2Code === match.params.countryCode
  );

  return (
    <div>
      <div>{countryDetails.name}</div>
    </div>
  );
};

export default Details;
