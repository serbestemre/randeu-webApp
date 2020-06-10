import React from "react";
import { Grid, Typography } from "@material-ui/core";
import businessImg from "../../../assets/images/erkek-kuafor.jpg";
import Rating from "@material-ui/lab/Rating";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const businessCard = (props) => {
  const {
    calendarOnClick,
    profileOnClick,
    handleCardClick,
    businessName,
    employees,
    star,
    commentCount,
  } = props;

  return (
    <Paper elevation={3}>
      <Grid
        style={{
          margin: "4px",
          minWidth: "min-content",
        }}
        container
        direction="column"
        justify="space-between"
      >
        <Grid container direction="row" justify="flex-start">
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
          ></Grid>

          <Grid
            item
            style={{
              width: "250px",
              height: "200px",
              marginRight: "5px",
            }}
          >
            <Grid container direction="column" justify="space-between">
              <Grid container direction="column" justify="space-between">
                <Typography variant="h5" component="h5">
                  {businessName}
                </Typography>

                <Grid container item direction="row" justify="space-between">
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
                  <Typography gutterBottom variant="subtitle1" component="p">
                    {employees[0].employee}
                  </Typography>
                </Grid>

                <Button
                  onClick={() => profileOnClick()}
                  variant="contained"
                  size="large"
                  color="secondary"
                  style={{ marginTop: "5px" }}
                >
                  İŞYERİ PROFİLİ
                </Button>
                <Button
                  onClick={() => calendarOnClick()}
                  variant="contained"
                  size="large"
                  color="primary"
                  style={{ marginTop: "5px" }}
                >
                  TAKVİMİ GÖR
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default businessCard;
