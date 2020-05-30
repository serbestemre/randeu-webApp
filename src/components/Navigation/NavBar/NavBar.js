import React from "react";
import { Link, withRouter } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Grid, MenuList, useMediaQuery } from "@material-ui/core";
// import Logo from "../../../assets/images/randeu-04.svg";
import Collapse from "../../UI/Collapse/Collapse";

const useStyles = makeStyles(() => ({
  MuiListItem: {
    display: "inline-block",
  },
  typographyStyles: {
    flex: 1,
  },
  media: {
    height: "80px",
    width: "130px",
    // 16:9
  },
}));

const links = [
  { id: 1, title: "Anasayfa", target: "/" },
  { id: 2, title: "Hakkımızda", target: "/hakkimizda" },
  // { id: 3, title: "İŞLETMELER", target: "#" },
  { id: 4, title: "Kayıt Ol", target: "/kullanici/kayit" },
  { id: 5, title: "Giriş Yap", target: "/kullanici/giris" },
];

const navBar = (props) => {
  const {
    location: { pathname },
  } = props;
  
  const isMobileScreen = useMediaQuery("(min-width:700px)");
  const classes = useStyles();

  let navigatorMenu = links.map((link) => (
    <MenuItem
      className={classes.MuiListItem}
      key={link.id}
      component={Link}
      to={link.target}
      selected={`${link.target}` === `${pathname}`}
    >
      {link.title}
    </MenuItem>
  ));

  if (!isMobileScreen) {
    navigatorMenu = <Collapse menuList={links}/>;
  }

  return (
    <Grid item>
      <AppBar position="static" style={{ backgroundColor: "#fafafb" }}>
        <Toolbar>
          <Typography component={"span"} className={classes.typographyStyles} color="primary" style={{ fontFamily: "Lato", fontSize:"xx-large" }}>
            {/* <CardMedia className={classes.media} image={Logo} title="Randeu" /> */}
            randeU
          </Typography>
          <MenuList>{navigatorMenu}</MenuList>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default withRouter(navBar);
