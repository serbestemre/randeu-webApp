import React, { useState } from "react";
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
import {checkValidity, updateObject} from '../../shared/utility'

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
  const [isFormValid, setIsFormValid] = useState(false);
  const [fullName, setFullName] = useState({label:"Adınız & Soyadınız", helperText:"",  touched:false,isValid:true, validation:{
    required:true,
    minLength:2,
    maxLength:15,
    isString:true,
  }});

  const [email, setEmail] = useState({label:"Email Adresiniz",  helperText:"", isValid:true, touched:false, validation:{
    required:true,
    isEmail:true   
  }});

  const [password, setPassword] = useState({label:"Şifreniz",helperText:"", isValid:true, isPassMatch:false, touched:false, validation:{
    required:true,
    minLength:6,
  }});

  const [passwordCheck, setPasswordCheck] = useState({label:"Şifreniz (Tekrar)", isPassMatch:false, touched:false, helperText:"", isValid:true, validation:{
    required:true,
    minLength:6
  }});


  const classes = useStyles();

  const verifyName = (event) => {
    updateObject(fullName,{ touched:true});
  let result =  checkValidity(event.target.value, fullName.validation);
  setFullName({...fullName, ...result});
  checkFormValidty();
  };

  const verifyEmail = (event) => {
    updateObject(email, {touched:true});
    let result =  checkValidity(event.target.value, email.validation);
    setEmail({...email, ...result});
    checkFormValidty();
  }

  const verifyPassword= (event) => {
    updateObject(password, {touched:true});
    let result =  checkValidity(event.target.value, password.validation);
    setPassword({...password, ...result});

    checkFormValidty();
  }
  const verifyPasswordCheck = (event) => {
    updateObject(passwordCheck, {touched:true});
    let result =  checkValidity(event.target.value, passwordCheck.validation);
    setPasswordCheck({...passwordCheck, ...result});
    if((password.value !== passwordCheck.value) ){
      setPassword({...password, helperText: "Şifreler uyuşmuyor!", isValid:false})
      setPasswordCheck({...passwordCheck,  helperText:"Şifreler uyuşmuyor!", isValid:false})
    }else{
      setPassword({...password, helperText : "", isValid:true})
      setPasswordCheck({...passwordCheck, helperText : "",  isValid:true})
    }
    checkFormValidty();
  }

  const checkFormValidty = () => {
    if(fullName.isValid && fullName.touched && email.isValid && email.touched && password.isValid && password.touched && passwordCheck.isValid && passwordCheck.touched){
      setIsFormValid(true)
    }else{
    setIsFormValid(false)
  }
}


  const registerHandler = () => {
    const payload = {
      fullName: fullName,
      email: email,
      password: password,
      passwordCheck: password,
    };

    console.log("registering.... with the payload:>>>>> ", payload);
    axios({
      method: "POST",
      url: "/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    })
      .then((response) => {
        console.log("register post req sent: ", response);
      })
      .catch((err) => {
        console.log("register post req ERROR : ", err);
      });
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                required={fullName.validation.required}
                onBlur={verifyName}
                onChange={(event) => setFullName({...fullName, value:event.target.value})}
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
                onBlur={verifyEmail}
                onChange={(event) => setEmail({...email, value:event.target.value})}
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
                required={password.validation.required}
                onBlur={verifyPassword}
                onChange={(event) => setPassword({...password, value:event.target.value})}
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
                required={passwordCheck.validation.required}
                onBlur={verifyPasswordCheck}
                onChange={(event) => setPasswordCheck({...password, value:event.target.value})}
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
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={registerHandler}
            disabled={!isFormValid}
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
};

export default register;
