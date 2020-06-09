import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "../../axios";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonProgress: {
    color: theme.palette.secondary.light,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [isLoading, setLoading] = useState();
  const [hasError, setHasError] = useState();
  const [redirect, setRedirect] = useState();
  
  const sendActivationLink = () => {
    setLoading(true);
    axios({
        method: "POST",
        url: "/account/send-activation-email",
        headers: {
          "Content-Type": "application/json",
        },data:{
            email:email
        },
      })
      .then( response => {
        setLoading(false);
        setRedirect( <Redirect
            to={{
              pathname: "/redirecting",
              state: {
                redirectText:
                  `Aktivasyon linki ${email} adresine başarıyla gönderildi.`,
              },
            }}
          />)
      })
      .catch( err => {
        setLoading(false);
        setHasError(err.response.data.message)
  })
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VpnKeyOutlinedIcon />
        </Avatar>
        <Typography gutterBottom component="h1" variant="h5">
          Hesap Aktivasyon
        </Typography>
        <Typography gutterBottom component="p" variant="body2" color="error">
          {hasError ? hasError : ""}
        </Typography>
        {redirect}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(event) => setEmail(event.target.value)}
            id="email"
            label="Email Adresiniz"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <div className={classes.wrapper}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isLoading}
              onClick={sendActivationLink}
            >
              Aktivasyon Linkini Gönder
            </Button>
            {isLoading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>

          <Grid container>
            <Grid item>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default login;
