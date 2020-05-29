import React from "react";
import { Link, withRouter } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Grid, MenuList, useMediaQuery } from "@material-ui/core";
import Logo from "../../../assets/images/randeu-04.svg";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  MuiListItem:{
      color:"black",
      display:"inline-block"
   
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
  const {location:{pathname}} = props;
  console.log("path: ", pathname);
  console.log(`${links[0].target}` === `${pathname}`);
  const isMobileScreen = useMediaQuery("(min-width:600px)")
  const classes = useStyles();

let navigatorMenu = links.map((link) => (
  <MenuItem  key={link.id} component={Link} to={link.target} selected={`${link.target}` === `${pathname}`}>{link.title}</MenuItem>
))

if(isMobileScreen){
// TODO Hamburger Menu
}

  return (
    <Grid item>
      <AppBar position="static" style={{ backgroundColor: "#fafafb" }}>
        <Toolbar>
          <Typography component={"span"} className={classes.typographyStyles}>
            <CardMedia className={classes.media} image={Logo} title="Randeu" />
          </Typography>
          <MenuList>
          {navigatorMenu}
          </MenuList>
      
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default withRouter(navBar) ;
