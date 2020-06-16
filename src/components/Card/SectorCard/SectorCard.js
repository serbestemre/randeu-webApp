import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > span": {
      margin: theme.spacing(2),
    },
  },
}));

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const {businessTypeList} = props;

  return (
    <Grid item sm={3} xl={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={props.imageSrc}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: "#D01C1F" }}
            >
              {props.header}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <div className={classes.demo}>
              <List dense>
                {businessTypeList.map((businessType) => (
                  <ListItem id={businessType.id}>
                    <ListItemAvatar>
                      <Avatar>
                        <FavoriteIcon size="small" color="secondary"/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={businessType.title} />
                  
                  </ListItem>
                ))}
              </List>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Detaylar
          </Button> */}
        </CardActions>
      </Card>
    </Grid>
  );
}
