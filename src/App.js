import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import ArticlsNews from "./Articls";
import SearchForm from "./SearchForm";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [languages, setLanguages] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [searchText, setSearchText] = useState("");
  const [buttonClick, setButtonClick] = useState(0);
  const [init, setInit] = useState(true);

  useEffect(() => {
    if (init) {
      return;
    }
    setLoading(true);
    async function fetchNews() {
      let apiKey = "pub_1342455bdf795c4d7380ec28c5087cd15b7a1";
      console.log(
        `https://newsdata.io/api/1/news?apikey=${apiKey}${searchText}${languages}${country}${category}`
      );
      await fetch(
        `https://newsdata.io/api/1/news?apikey=${apiKey}${searchText}${languages}${country}${category}`
      )
        .then((response) => response.json())
        .then((response) => {
          setData(response);
          console.log(response);
        })
        .then(() => setLoading(false))
        .catch(setError);
    }
    console.log("trying to send a request");
    fetchNews();
  }, [buttonClick]);

  useEffect(() => {
    console.log(languages, country, buttonClick);
  }, [languages, category, country, buttonClick]);

  function showArtils() {
    return data.results.map((eachArticls) => {
      return (
        <div>
          <Grid
            container
            rowSpacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={11} md={10}>
              <Paper
                component="form"
                variant="outlined"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  borderColor: "#06283d"
                }}
              >
                <ArticlsNews
                  title={eachArticls.title}
                  keywords={eachArticls.keywords}
                  image_url={eachArticls.image_url}
                  description={eachArticls.description}
                  content={eachArticls.content}
                  pubDate={eachArticls.pubDate}
                  country={eachArticls.country}
                  link={eachArticls.link}
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
    });
  }

  function handleSearchText(text) {
    console.log("raw", text);
    if (text === "") {
      setSearchText("");
    }
    const encodedText = encodeURIComponent(text);
    const searchTextQuery = `&q=${encodedText}`;
    setSearchText(searchTextQuery);
  }

  function handleLanguageChange(language) {
    console.log("raw", language);
    if (language === "") {
      setLanguages("");
    }
    const languageQuery = `&language=${language}`;
    setLanguages(languageQuery);
  }

  function handleCategoryChange(category) {
    console.log("raw", category);
    if (category === "") {
      setCategory("");
    }
    const categoryQuery = `&category=${category}`;
    setCategory(categoryQuery);
  }

  function handleCountryChange(country) {
    console.log("raw", country);
    if (country === "") {
      setCountry("");
    }
    const countryQuery = `&country=${country}`;
    setCountry(countryQuery);
  }

  function startSearch() {
    setInit(false);
    setButtonClick(buttonClick + 1);
  }

  if (loading) {
    return (
      <div>
        Loading...
        <SearchForm
          setSearchText={handleSearchText}
          setCountry={handleCountryChange}
          setCategory={handleCategoryChange}
          setLanguages={handleLanguageChange}
          startSearch={startSearch}
        />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1> Something want Wrong... </h1>;
        <SearchForm
          setSearchText={handleSearchText}
          setCountry={handleCountryChange}
          setCategory={handleCategoryChange}
          setLanguages={handleLanguageChange}
          startSearch={startSearch}
        />
      </div>
    );
  }
  if (data) {
    return (
      <div>
        <SearchForm
          setSearchText={handleSearchText}
          setCountry={handleCountryChange}
          setCategory={handleCategoryChange}
          setLanguages={handleLanguageChange}
          startSearch={startSearch}
        />
        <pre>{showArtils()}</pre>
      </div>
    );
  }
  return (
    <>
      <SearchForm
        setSearchText={handleSearchText}
        setCountry={handleCountryChange}
        setCategory={handleCategoryChange}
        setLanguages={handleLanguageChange}
        startSearch={startSearch}
      />
      <h1> No data </h1>
    </>
  );
}
