import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTheme } from "@material-ui/core/styles";
import axios from "../../axios";

const activateUser = (props) => {
  const theme = useTheme();

  const [response, setResponse] = useState();

  useEffect(() => {
    activationHandler(props.match.params.uuid);
  }, []);

  const activationHandler = (uuid) => {
    axios({
      method: "GET",
      url: `/account/activate/${uuid}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setResponse(response.data.message);
        setTimeout(() => {
          props.history.push("/");
        }, 3000);
      })
      .catch((err) => {
        setResponse(err.response.data.message)
        setTimeout(() => {
            props.history.push("/");
          }, 3000);
      });
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ marginTop: "100px" }}
      spacing={2}
    >
      <Grid item xs={8} xl={8}>
        <Typography
          gutterBottom
          variant="h2"
          component="h2"
          align="center"
          style={{ color: theme.palette.info.main }}
        >
          <CircularProgress style={{ color: theme.palette.success.main }} />{" "}
          {response
            ? "Sayfa yönlendiriliyor..."
            : "Hesabınız Aktifleştiriliyor...."}
        </Typography>
      </Grid>
      <Grid item xs={6} xl={6}>
        <Typography
          variant="h5"
          component="h5"
          align="center"
          style={{ color: theme.palette.success.main }}
        >
          {response ? response : "Lütfen bekleyiniz..."}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default activateUser;
