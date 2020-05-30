import React from 'react';
import {Grid} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import {makeStyles} from "@material-ui/core/styles";



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
  const {list, textFieldPlaceholder} = props;
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container item spacing={2}>
        <Grid item xs={2} sm={6}>
          <Autocomplete
            id="combo-box-demo"
            options={list}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label={textFieldPlaceholder}
                variant="outlined"
              />
            )}
          />
        </Grid>

        <Grid item xs={8} sm={3}>
          <Autocomplete
            className={classes.root}
            id="combo-box-demo"
            options={cities}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Şehir Seçin"
                variant="outlined"
              />
            )}
          />
        </Grid>

        <Grid container item sm={3} alignItems={"center"}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            fullWidth={true}
            className={classes.button}
            startIcon={<SearchIcon />}
          >
            Ara
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};


export default TabForm;