import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

const SectionDivider = (props) => {
  const {title, paragraph} = props;
  const theme = useTheme();
return (
  <Grid
    container
    direction={"column"}
    alignItems="center"
    style={{
      color: theme.palette.secondary.main,
      paddingTop: "50px",
      paddingBottom: "50px",
      textDecoration:"italic"
    }}
    justify={"center"}
  >
    <Typography gutterBottom variant="h3">
      {title}
    </Typography>
      <Grid item xs={12} md={8} xl={6}>
        <Typography gutterBottom component="p" variant="h6" color="textPrimary" align="center">
          {paragraph}
        </Typography>
      </Grid>
  </Grid>
);
};

export default SectionDivider;

