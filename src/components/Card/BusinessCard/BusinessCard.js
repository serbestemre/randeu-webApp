import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Grid} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BusinessImg from '../../../assets/images/beauty-shop.jpg'
import Box from '@material-ui/core/Box';
import { Redirect } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';




const businessCard = (props) => {
  const {
    onClickHandler,
    businessId,
    businessName,
    address,
    employees,
    star,
    commentCount,
  } = props;
  const [redirect, setRedirect] = useState();


  const detailHandler  = (businessId) => {
    // props.history.push('/ara/randevu' + businessId);
  }

  return (
    
   <Box boxShadow={5}>
       {redirect}
      <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={BusinessImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {businessName}
          </Typography>
          <Grid container direction="row" justify="space-between">
          <Rating name="half-rating-read" defaultValue={star} precision={0.5} readOnly />
          <Typography variant="body2" color="textSecondary" component="p">
            ({commentCount}+ Yorum)
          </Typography>
          </Grid>
          <Grid container direction="column">
          <Typography variant="subtitle1" color="textPrimary" component="p">
            Uzman & İş Sahibi: {employees[0].employee}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Adres: {address}
          </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={detailHandler}>
          PROFIL
        </Button>
        <Button size="small" color="primary" onClick={() =>onClickHandler(businessId,employees)}>
          TAKVİME İNCELE
        </Button>
      </CardActions>
    </Card>
   </Box>

  );
};

export default withRouter(businessCard);
