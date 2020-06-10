import React, {useState, useEffect}  from "react";
import { Link, withRouter } from "react-router-dom";
import {useSelector  } from 'react-redux';
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

const navBar = (props) => {
  

  const {
    location: { pathname },
  } = props;

  const [user, setUser] = useState();

  const userProfile = useSelector(state => {
    return state.auth.userProfile
  })



    useEffect(() => {
      setUser(userProfile);

    },[user])


    const links = [
      { id: 1, title: "Anasayfa", target: "/", show: "always" },
      { id: 2, title: "Hakkımızda", target: "/hakkimizda", show: "always" },
      // { id: 3, title: "İŞLETMELER", target: "#" },
      { id: 4, title: "Kayıt Ol", target: "/kullanici/kayit", show: "not-auth" },
      { id: 5, title: "Giriş Yap", target: "/kullanici/giris", show: "not-auth" },
      { id: 5, title: `${userProfile && user ? user.fullName.toUpperCase() : "..."}`, target: "/kullanici/profil", show: "only-auth" },
      { id: 6, title: "Çıkış Yap", target: "/cikis", show: "only-auth" },
    ];

  const isMobileScreen = useMediaQuery("(min-width:700px)");
  const classes = useStyles();

  const isAuthenticated = useSelector((state) => {
    return state.auth.token;
  });

  const rederLinks = links.filter((link) => {
    if (
      link.show === "always" ||
      (link.show === "not-auth" && isAuthenticated === null) ||
      (link.show === "only-auth" && isAuthenticated !== null)
    ) {
      return true
    }
    return false
  })


  let navigatorMenu = rederLinks.map((link) => {
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
  });


  if (!isMobileScreen) {
    navigatorMenu = <Collapse menuList={rederLinks} />;
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
