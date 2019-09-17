const supertest = require("supertest");
const app = require("../index");
const api = supertest(app);

const countries = require("../data/countries");

describe("testing the get method of the /countries API endpoint", () => {
  test("notes are returned as json", async () => {
    await api
      .get("/countries")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("all notes are returned", async () => {
    const response = await api.get("/countries");
    expect(response.body.length).toBe(countries.length);
  });

  test("Return a specific country for a given code", async () => {
    for (i = 0; i < countries.length; i++) {
      const countryToView = countries[i];
      const resultCountry = await api
        .get(`/countries/code/${countryToView.Code}`)
        .expect(200);
      expect(resultCountry.body.Name).toEqual(countryToView.Name);
    }
  });
});
