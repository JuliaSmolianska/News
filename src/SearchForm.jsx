import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

export default function SearchForm(props) {
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  const handleSearchWord = (event) => {
    const value = event.target.value;
    console.log(value);
    props.setSearchText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.startSearch();
  };

  const handleLanguage = (event) => {
    props.setLanguages(event.target.value);
    setLanguage(event.target.value);
  };

  const handleCategory = (event) => {
    props.setCategory(event.target.value);
    setCategory(event.target.value);
  };

  const handleCountry = (event) => {
    props.setCountry(event.target.value);
    setCountry(event.target.value);
  };

  return (
    <div>
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "#8bbccc",
          border: "1px solid #06283d",
          borderRadius: "10px",
          margin: "2% 5%"
        }}
      >
        <h1>World's News</h1>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Paper
              component="form"
              variant="outlined"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                borderColor: "darkgrey"
              }}
            >
              <IconButton sx={{ p: "2px" }} aria-label="menu"></IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter a topic or keyword"
                inputProps={{ "aria-label": "Enter a topic or keyword" }}
                variant="outlined"
                onChange={handleSearchWord}
              />
              <SearchIcon />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              >
                <RestartAltIcon />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Button
              style={{
                marginTop: "7%",
                color: "white",
                backgroundColor: "#06283d"
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              Search
            </Button>
          </Grid>

          <Grid item xs={9} md={4}>
            <Paper elevation={3}>
              <FormControl fullWidth>
                <InputLabel id="language-select-label">language</InputLabel>
                <Select
                  labelId="language-select-label"
                  id="language-select"
                  value={language}
                  label="language"
                  onChange={handleLanguage}
                  backgroundColor="white"
                >
                  <MenuItem value={"en"}>English</MenuItem>
                  <MenuItem value={"fr"}>French</MenuItem>
                  <MenuItem value={"de"}>German</MenuItem>
                  <MenuItem value={"sv"}>Swedish</MenuItem>
                  <MenuItem value={"ru"}>Russian</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={9} md={4}>
            <Paper elevation={3}>
              <FormControl fullWidth>
                <InputLabel id="category-select-label">category</InputLabel>
                <Select
                  labelId="category-select-label"
                  id="category-select"
                  value={category}
                  label="category"
                  onChange={handleCategory}
                >
                  <MenuItem value={"business"}>Business</MenuItem>
                  <MenuItem value={"entertainment"}>Entertainment</MenuItem>
                  <MenuItem value={"health"}>Health</MenuItem>
                  <MenuItem value={"politics"}>Politics</MenuItem>
                  <MenuItem value={"science"}>Science</MenuItem>
                  <MenuItem value={"sports"}>Sports</MenuItem>
                  <MenuItem value={"technology"}>Technology</MenuItem>
                  <MenuItem value={"top"}>Top</MenuItem>
                  <MenuItem value={"world"}>World</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={9} md={4}>
            <Paper elevation={3}>
              <FormControl fullWidth>
                <InputLabel id="country-select-label">country</InputLabel>
                <Select
                  labelId="country-select-label"
                  id="country-select"
                  value={country}
                  label="country"
                  onChange={handleCountry}
                >
                  <MenuItem value={"au"}>Australia</MenuItem>
                  <MenuItem value={"ca"}>Canada</MenuItem>
                  <MenuItem value={"cn"}>China</MenuItem>
                  <MenuItem value={"fr"}>French</MenuItem>
                  <MenuItem value={"de"}>German</MenuItem>
                  <MenuItem value={"ru"}>Russia</MenuItem>
                  <MenuItem value={"se"}>Swedish</MenuItem>
                  <MenuItem value={"tr"}>Turkey</MenuItem>
                  <MenuItem value={"uk"}>Ukraine</MenuItem>
                  <MenuItem value={"us"}>Unated States of America</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
