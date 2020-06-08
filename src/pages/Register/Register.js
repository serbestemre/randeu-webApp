import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { checkValidity } from "../../shared/utility";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Redirect } from "react-router-dom";

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

const register = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [fullName, setFullName] = useState({
    label: "Adınız & Soyadınız",
    helperText: "",
    touched: false,
    isValid: true,
    validation: {
      required: true,
      minLength: 2,
      maxLength: 15,
      isString: true,
    },
  });

  const [email, setEmail] = useState({
    label: "Email Adresiniz",
    helperText: "",
    isValid: true,
    touched: true,
    validation: {
      required: true,
      isEmail: true,
    },
  });

  const [password, setPassword] = useState({
    label: "Şifreniz",
    helperText: "",
    isValid: true,
    touched: false,
    validation: {
      required: true,
      minLength: 6,
    },
  });

  const [passwordCheck, setPasswordCheck] = useState({
    label: "Şifreniz (Tekrar)",
    touched: false,
    helperText: "",
    isValid: true,
    validation: {
      required: true,
      minLength: 6,
    },
  });

  const [axiosError, setAxiosError] = useState();
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState();
  const classes = useStyles();

  const verifyName = (event) => {
    let result = checkValidity(event.target.value, fullName.validation);
    setFullName({
      ...fullName,
      ...result,
      value: event.target.value,
      touched: true,
    });
    checkFormValidty();
  };

  const verifyEmail = (event) => {
    setEmail({ email, touched: true });
    let result = checkValidity(event.target.value, email.validation);
    setEmail({ ...email, ...result });
    checkFormValidty();
  };

  const verifyPassword = (event) => {
    let result = checkValidity(event.target.value, password.validation);
    setPassword({
      ...password,
      ...result,
      value: event.target.value,
      touched: true,
    });
    checkFormValidty();
  };
  const verifyPasswordCheck = (event) => {
    let result = checkValidity(event.target.value, passwordCheck.validation);
    setPasswordCheck({
      ...passwordCheck,
      ...result,
      value: event.target.value,
      touched: true,
    });
    checkFormValidty();
  };

  const errorHandler = (error) => {
    if (error.request && !error.response) {
      setAxiosError(
        "Sunucu kaynaklı bir sorun oluştu. Lütfen daha sonra tekrar deneyin"
      );
    }

    if (error.response && error.response.data) {
      // Auth Error handling eg. mail already exists
      setAxiosError(error.response.data.message);
    }
  };

  const checkFormValidty = () => {
    if (
      fullName.isValid &&
      fullName.touched &&
      email.isValid &&
      email.touched &&
      password.isValid &&
      password.touched &&
      passwordCheck.isValid &&
      passwordCheck.touched
    ) {
      setIsFormValid(true);
    } else {
      console.log("invalid form");
      setIsFormValid(false);
    }
  };

  const registerHandler = () => {
    setLoading(true);
    const payload = {
      fullName: fullName.value,
      email: email.value,
      password: password.value,
      passwordCheck: passwordCheck.value,
    };

    axios({
      method: "POST",
      url: "/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    })
      .then((response) => {
        setLoading(false);
        setRedirect(
          <Redirect
            to={{
              pathname: "/redirecting",
              state: {
                redirectText:
                  "Kayıt işlemi başarıyla tamamlandı. Lütfen mail adresine gelen linke tıklayarak hesabını aktifleştirmeyi unutma.",
              },
            }}
          />
        );
      })
      .catch((err) => {
        setLoading(false);
        errorHandler(err);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography gutterBottom component="h1" variant="h5">
          Kayıt Ol
        </Typography>
        <Typography gutterBottom component="p" variant="body2" color="error">
          {axiosError ? axiosError : ""}
        </Typography>
        {redirect}
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required={fullName.validation.required}
                onBlur={(event) => verifyName(event)}
                onChange={(event) => {
                  setFullName({ ...fullName, value: event.target.value });
                  verifyName(event);
                }}
                error={!fullName.isValid}
                id="fullName"
                label={fullName.label}
                helperText={fullName.helperText}
                autoComplete="fullname"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required={email.validation.required}
                onBlur={(event) => verifyEmail(event)}
                onChange={(event) =>
                  setEmail({ ...email, value: event.target.value })
                }
                error={!email.isValid}
                id="email"
                label={email.label}
                helperText={email.helperText}
                name="email"
                autoComplete="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onBlur={(event) => verifyPassword(event)}
                required={password.validation.required}
                onChange={(event) => {
                  setPassword({ ...password, value: event.target.value });
                  verifyPassword(event);
                }}
                fullWidth
                name="password"
                label={password.label}
                type="password"
                id="password"
                error={!password.isValid}
                helperText={password.helperText}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onBlur={verifyPasswordCheck}
                required={passwordCheck.validation.required}
                onChange={(event) => {
                  setPasswordCheck({
                    ...passwordCheck,
                    value: event.target.value,
                  });
                  verifyPasswordCheck(event);
                }}
                fullWidth
                name="passwordCheck"
                label={passwordCheck.label}
                type="password"
                id="passwordCheck"
                error={!passwordCheck.isValid}
                helperText={passwordCheck.helperText}
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

          <div className={classes.wrapper}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loading || !isFormValid}
              onClick={registerHandler}
            >
              Kayıt Ol
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
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
};

export default register;
