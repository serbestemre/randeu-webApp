import React from "react";
import { Link } from "react-router-dom";
import { Grid, MenuList, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Button from "@material-ui/core/Button";
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
import { makeStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";

const footer = (props) => {
  const theme = useTheme();

  const links = [
    { id: 1, title: "Anasayfa", target: "/" },
    { id: 2, title: "Hakkımızda", target: "/hakkimizda" },
    // { id: 3, title: "İŞLETMELER", target: "#" },
    { id: 4, title: "Kayıt Ol", target: "/kullanici/kayit" },
    { id: 5, title: "Giriş Yap", target: "/kullanici/giris" },
  ];

  const links2 = [
    { id: 1, title: "Randevu Sistemi", target: "#" },
    { id: 2, title: "Ücretler ve Abonelik", target: "#" },
  ];

  const useStyles = makeStyles((theme) => ({
    MuiListItem: {
      color: "white",
      display: "block",
      maxWidth: "max-content",
    },
    typographyStyles: {
      flex: 1,
    },
    media: {
      height: "80px",
      width: "130px",
    },
    button: {
      backgroundColor: `${theme.palette.secondary.contrastText}`,
      color: `${theme.palette.secondary.main}`,
    },
  }));
  const classes = useStyles();

  return (
    <Grid
      container
      style={{
        backgroundColor: `${theme.palette.secondary.dark}`,
        padding: "16px",
        minHeight: "30vh",
      }}
    >
      <Grid item sm={4}>
        <MenuList>
          {links.map((link) => (
            <MenuItem
            disableGutters
              key={link.id}
              component={Link}
              to={link.target}
              className={classes.MuiListItem}
              align="left"
              disableRipple
            >
              {link.title}
            </MenuItem>
          ))}
        </MenuList>
      </Grid>
      <Grid item sm={4}>
      <MenuList>
          {links2.map((link) => (
            <MenuItem
            disableGutters
              key={link.id}
              component={Link}
              to={link.target}
              className={classes.MuiListItem}
              align="left"
              disableRipple
            >
              {link.title}
            </MenuItem>
          ))}
        </MenuList>
      </Grid>
      <Grid container justify="space-between" alignItems="flex-end" >
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
                className={classes.button}
                fullWidth
                startIcon={<AndroidIcon />}
              >
                Get Android App
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                fullWidth
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
