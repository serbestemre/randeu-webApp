import React, { useCallback } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Grid, MenuList, useMediaQuery } from "@material-ui/core";
// import Logo from "../../../assets/images/randeu-04.svg";
import Collapse from "../../UI/Collapse/Collapse";
import * as authActions from "../../../store/actions/index";

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
  { id: 1, title: "Anasayfa", target: "/", show: "always" },
  { id: 2, title: "Hakkımızda", target: "/hakkimizda", show: "always" },
  // { id: 3, title: "İŞLETMELER", target: "#" },
  { id: 4, title: "Kayıt Ol", target: "/kullanici/kayit", show: "not-auth" },
  { id: 5, title: "Giriş Yap", target: "/kullanici/giris", show: "not-auth" },
  { id: 5, title: "Username", target: "/kullanici/profil", show: "only-auth" },
  { id: 6, title: "Çıkış Yap", target: "/cikis", show: "only-auth" },
];

const navBar = (props) => {
  const {
    location: { pathname },
  } = props;

  const isMobileScreen = useMediaQuery("(min-width:700px)");
  const classes = useStyles();

  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => {
    return state.auth.token;
  });

  let navigatorMenu = links.map((link) => {
    if (
      link.show === "always" ||
      (link.show === "not-auth" && isAuthenticated === null) ||
      (link.show === "only-auth" && isAuthenticated !== null)
    ) {
      return (
        <MenuItem
          className={classes.MuiListItem}
          key={link.id}
          component={Link}
          to={link.target}
          selected={`${link.target}` === `${pathname}`}
          disableRipple
        >
          {link.title}
        </MenuItem>
      );
    }
  });

const mobileLinks = links.filter((link) => {
  if (
    link.show === "always" ||
    (link.show === "not-auth" && isAuthenticated === null) ||
    (link.show === "only-auth" && isAuthenticated !== null)
  ) {
    return true
  }
})


  if (!isMobileScreen) {
    console.log("mobile links:", mobileLinks)
    navigatorMenu = <Collapse menuList={mobileLinks} />;
  }

  return (
    <Grid item>
      <AppBar position="static" style={{ backgroundColor: "#fafafb" }}>
        <Toolbar>
          <Typography
            component={"span"}
            className={classes.typographyStyles}
            color="primary"
            style={{ fontFamily: "Lato", fontSize: "xx-large" }}
          >
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
