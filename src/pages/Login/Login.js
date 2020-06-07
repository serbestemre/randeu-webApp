import React, {useState,useEffect, useCallback} from "react";
import {useDispatch, useSelector  } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as authActions from '../../store/actions/index'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color:theme.palette.secondary.light,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const login = (props) =>  {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const isLoading = useSelector(state => {
    return state.auth.loading
  })

  const hasError = useSelector(state =>{
    console.log(state.auth.error)
    return state.auth.error
  })


  const onAuth = useCallback((email, password) => dispatch(authActions.auth(email, password)), [dispatch]);


const loginHandler = (event) => {
  onAuth(email, password)
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography gutterBottom component="h1" variant="h5">
            Giriş Yap
        </Typography>
        <Typography gutterBottom component="p" variant="body2" color="error">
          {hasError ? hasError : ""}
        </Typography>

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(event)=> setEmail(event.target.value) }
            id="email"
            label="Email Adresiniz"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(event)=> setPassword(event.target.value) }
            name="password"
            label="Şifreniz"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Beni Hatırla"
          />
          <div className={classes.wrapper}>
        <Button
        fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={isLoading}
          onClick={loginHandler}
        >
          Giriş Yap
        </Button>
        {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>

          <Grid container>
            <Grid item xs>
            <Typography
                variant="body2"
                component={Link}
                color="secondary"
                to="/kullanici/kayit"
              >
                Şifremi Unuttum
              </Typography>
            </Grid>
            <Grid item>
            <Typography
                variant="body2"
                component={Link}
                color="secondary"
                to="/kullanici/kayit"
              >
                Hesabınız yok mu? Hemen Kayıt ol
              </Typography>
        
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}

export default login;