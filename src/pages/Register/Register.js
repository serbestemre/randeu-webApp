import React, {useState} from "react";
import axios from '../../axios';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const register = (props) => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const classes = useStyles();

  const registerHandler = () => {

    const payload = {
      fullName:name+surname,
      email:email,
      password:password,
      passwordCheck:password
    }

      console.log("registering.... with the payload:>>>>> ", payload)
    axios({
      method: 'POST',
      url: "/register",
      headers:{
        "Content-Type": "application/json"
      },
      data:payload
    })
    .then(response => {
      console.log("register post req sent: ", response)
    })
    .catch(err =>{
      console.log("register post req ERROR : ", err)
    })
    
    

  };
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Kayıt Ol
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firtsName"
                variant="outlined"
                required
                onChange={event=> setName(event.target.value)}
                fullWidth
                id="firstName"
                label="Adınız"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                onChange={event=> setSurname(event.target.value)}

                fullWidth
                id="lastName"
                label="Soyadınız"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                onChange={event=> setEmail(event.target.value)}
                fullWidth
                id="email"
                label="Email Adresiniz"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                onChange={event=> setPassword(event.target.value)}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Sözleşmeyi onaylıyorum"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={registerHandler}
          >
            Kayıt Ol
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Typography
                variant="body2"
                component={Link}
                color="secondary"
                to="/kullanici/giris"
              >
                {" "}
                Zaten hesabınız var mı? Hemen Giriş Yap
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default register;