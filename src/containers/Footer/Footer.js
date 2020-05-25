import React from "react";

import Link from "@material-ui/core/Link";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from "@material-ui/core/Button";
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
import { makeStyles } from "@material-ui/styles";
import HeaderPicture from "../../assets/images/header3.jpg";

const footer = (props) => {
    const theme = useTheme();

  const useStyles = makeStyles(() => ({
    root: {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.4)), url(${HeaderPicture})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      height: "100vh",
    },
    padding: {
      paddingTop: "16px",
    },
  }));
  const classes = useStyles();

  return (
    <Grid
      container
      style={{
        backgroundColor: `${theme.palette.secondary.dark}`,
        padding: "24px",
      }}
    >
      <Grid item sm={4}>
     <Grid item>
     <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          Anasayfa
        </Link>
     </Grid>
     <Grid item>
     <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          Hakkımızda
        </Link>
     </Grid>
     <Grid item>
     <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
            İşletmeler
        </Link>
     </Grid>
    
      </Grid>
      <Grid item sm={4}>
      <Grid item>
     <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
            Randevu Sistemi
        </Link>
     </Grid >
     <Grid item>
     <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
            Ücretler ve Abonelik
        </Link>
     </Grid>
      </Grid>
      <Grid container justify="space-between" alignItems="flex-end" sm={4}>
        <Grid item>
          <IconButton aria-label="facebook" style={{ color: "white" }}>
            <FacebookIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="instagram" style={{ color: "white" }}>
            <InstagramIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="twitter" style={{ color: "white" }}>
            <TwitterIcon />
          </IconButton>
        </Grid>

        <Grid item>
          <Grid container direction={"column"} spacing={1}>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                className={classes.button}
                startIcon={<AndroidIcon />}
              >
                Get Android App
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                className={classes.button}
                startIcon={<AppleIcon />}
              >
                Get iOS App
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default footer;
