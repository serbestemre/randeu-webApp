import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTheme } from "@material-ui/core/styles";

const redirection = (props) => {
    const theme = useTheme();
    const {redirectText }= props;

  useEffect(() => {
    setTimeout(() => {
        props.history.push("/");
 }, 3000);
  }, []);

  return (
    <Grid container direction="column" justify="center" alignItems="center" style={{ marginTop: "100px" }} spacing={2}>
   <Grid item xs={8} xl={8}>
   <Typography gutterBottom variant="h2" component="h2" align="center" style={{color:theme.palette.info.main}}>
   <CircularProgress style={{color:theme.palette.success.main}} /> Sayfa yönlendiriliyor....
      </Typography>
   </Grid>
     <Grid item xs={6} xl={6}>
     <Typography variant="h5" component="h5" align="center" style={{color:theme.palette.success.main}}>
        {redirectText}
      </Typography>
     </Grid>
    </Grid>
  );
};

export default redirection;
