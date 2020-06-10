import React from "react";
import { Grid, Typography } from "@material-ui/core";
import businessImg from "../../../assets/images/erkek-kuafor.jpg";
import Rating from "@material-ui/lab/Rating";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import Button from "@material-ui/core/Button";

const businessCard = (props) => {
  const { businessName, employees, star, commentCount } = props;

  const handleDelete = () => {
    console.log("chip clicked");
  };

  return (
    <Grid
    style={{
                maxWidth: "max-content",
                minWidth: "min-content",
                border: "1px solid",
              }}
      container
      direction="column"
      justify="space-between"
      alignItems="space-between"
    >
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid
          item
          style={{
            backgroundImage: `url(${businessImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "180px",
            height: "200px",
            marginRight: "5px",
          }}
        >
        </Grid>

        <Grid item style={{
                width: "250px",
                height: "200px",
                marginRight:"5px"
              }}>
          <Grid container direction="column" justify="space-between" alignItems="space-between">
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="space-between"
          >
            <Typography variant="h5" component="h5">
              {businessName}
            </Typography>

            <Grid
              container
              item
              direction="row"
              justify="space-between"
              alignItems="center"
            >
            <Grid item>
            <Rating
                name="half-rating-read"
                defaultValue={Math.random() * (5 - 1) + 1}
                precision={0.5}
                readOnly
              />
            </Grid>
          <Grid item>
          <Typography gutterBottom variant="body2" component="p">
                ({commentCount}+ Yorum)
              </Typography>
          </Grid>
            </Grid>

            <Grid item>
            <Typography gutterBottom variant="subtitle" component="p">
                {employees[0].employee}
              </Typography>
            </Grid>

            <Button variant="contained" size="large" color="primary" style={{marginTop:"5px"}}>
              Takvime Git
            </Button>
            
          </Grid>
        
          </Grid>
        </Grid>
   
      </Grid>
    </Grid>
  );
};

export default businessCard;
