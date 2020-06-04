import React from 'react';
import {Grid} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import {makeStyles} from "@material-ui/core/styles";
import { useSelector  } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';


const TabForm = (props) => {
  const cities = [
    { title: "İzmir" },
    { title: "İstanbul" },
    { title: "Ankara" },
  ];
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "transparent"
    },
  }));

  const classes = useStyles();
  const {list, error, optionLabel, textFieldPlaceholder} = props;

 let searchField = null;

 searchField = error ? <p style={{color:"red"}}>Search list cannot be loaded...</p> : <CircularProgress/>


 if(list){
   searchField =  (<Autocomplete
   id="combo-box-demo"
   options={list}
   getOptionLabel={optionLabel}
   renderInput={(params) => (
     <TextField
       {...params}
       label={textFieldPlaceholder}
       variant="outlined"
     />
   )}
 />);
 }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container item spacing={1} xs={12} sm={12}>
        <Grid item xs={12} sm={6}  md={5}>
         {searchField}
        </Grid>

        <Grid item xs={12} sm={6} md={5}>
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

        <Grid container item sm={12}md={2} alignItems={"center"}>
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