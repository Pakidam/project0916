const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const countries = require("./data/countries");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const port = 3001;

app.get("/countries", (req, res) => res.status(200).send(countries));

app.get("/countries/code/:code", (req, res) => {
  const code = req.params.code;

  const foundCode = countries.find(c => c.Code === code);

  if (foundCode) {
    res.status(200).send(foundCode);
  } else {
    res
      .status(404)
      .send(
        "You've entered a wrong country code or this country code does not exist"
      );
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
