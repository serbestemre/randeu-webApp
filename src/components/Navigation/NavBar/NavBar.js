import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Logo from "../../../assets/images/randeu-04.svg";
import { CardMedia } from "@material-ui/core";
import Link from "../Link/Link";

const useStyles = makeStyles(() => ({
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
  { id: 1, title: "ANASAYFA", target: "/" },
  { id: 2, title: "HAKKIMIZDA", target: "/hakkimizda" },
  { id: 3, title: "İŞLETMELER", target: "#" },
  { id: 4, title: "KAYIT OL", target: "/kullanici/kayit" },
  { id: 5, title: "GİRİŞ YAP", target: "/kullanici/giris" },
];

const Header = () => {
  const classes = useStyles();
  return (
    <Grid item>
      <AppBar position="static" style={{ backgroundColor: "#fafafb" }}>
        <Toolbar>
          <Typography component={"span"} className={classes.typographyStyles}>
            <CardMedia className={classes.media} image={Logo} title="Randeu" />
          </Typography>

          {links.map((link) => (
              <Link key={link.id} title={link.title} target={link.target} />
    
          ))}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
