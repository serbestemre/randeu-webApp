import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Redirect } from "react-router-dom";

const TabForm = (props) => {
  const cities = [
    { title: "İzmir" },
    { title: "İstanbul" },
    { title: "Ankara" },
  ];
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "transparent",
    },
  }));

  const classes = useStyles();
  const { list, error, optionLabel, textFieldPlaceholder } = props;
  const [redirect, setRedirect] = useState();
  const [searchedKeyword, setSearchedKeyWord] = useState();

  let searchField = null;

  searchField = error ? (
    <p style={{ color: "red" }}>Search list cannot be loaded...</p>
  ) : (
    <CircularProgress />
  );

  if (list) {
    searchField = (
      <Autocomplete
      freeSolo
      id="randevu-arama-filtreleme"
      disableClearable
      autoSelect
      autoComplete
      onInputChange={(event,value)=> setSearchedKeyWord(value)}
      options={list.map(optionLabel)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={textFieldPlaceholder}
          variant="outlined"
          InputProps={{ ...params.InputProps, type: 'search' }}
        />
      )}
    /> );
  }

  const appointmentSearchHandler = () => {
    console.log("sending as prop value of searchkeyword:" , searchedKeyword);
    setRedirect(
      <Redirect
        to={{
          pathname: "/ara/randevu",
          state: {
            searchedKeyword: searchedKeyword
          },
        }}
      />
    );
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container item spacing={1} xs={12} sm={12}>
        <Grid item xs={12} sm={6} md={5}>
          {searchField}
        </Grid>
        {redirect}
        <Grid item xs={12} sm={6} md={5}>


          <Autocomplete
      freeSolo
      id="city-dropdown"
      disableClearable
      options={cities.map((opt => opt.title))}
      renderInput={(params) => (
        <TextField
          {...params}
          label={"Şehir Seçin"}
          variant="outlined"
          onChange={(event) => {setSearchedKeyWord(event.target.value)}}
          InputProps={{ ...params.InputProps, type: 'search' }}
        />
      )}
    /> 



        </Grid>

        <Grid container item sm={12} md={2} alignItems={"center"}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            fullWidth={true}
            className={classes.button}
            startIcon={<SearchIcon />}
            onClick={appointmentSearchHandler}
          >
            Ara
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TabForm;
