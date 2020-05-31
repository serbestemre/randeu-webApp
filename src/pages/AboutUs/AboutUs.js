import React from "react";
import Banner from "../../containers/Banner/Banner";
import { Grid, Typography } from "@material-ui/core";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import Testimonial from '../../components/Testimonial/Testimonial';
import BeautyShopImage from '../../assets/images/beauty-shop.jpg';
import DentistStore from '../../assets/images/dentist-store.jpg';
import EntertainmentSaloon from '../../assets/images/bowling-saloon.jpg';
import BusinessRegisterBar from '../../components/UI/BusinessRegisterBar/BusinessRegisterBar'
import {useTheme} from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  sectionGrid:{
    paddingTop:"50px"
  }
 }));

const aboutUs = (props) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div>
      <Banner bannerTitle="Hakkımızda" />
      <BusinessRegisterBar title="İşyeriniz mi var?" paragraph="Bir çok kolaylıktan ücretsiz faydalanmak için"/>
      <Grid
      className={classes.sectionGrid}
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid container item direction="column" xs={12} sm={6} md={5}>
          <Grid item>
            <Typography gutterBottom variant="h2" style={{color:`${theme.palette.secondary.main}`}}>Biz Kimiz?</Typography>
          </Grid>
          <Grid item>
            <Typography  variant="body1">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like)
            </Typography>{" "}
          </Grid>
        </Grid>
        <Grid container item direction="column" xs={12} sm={6} md={5}>
          <Grid item>
            <Typography gutterBottom variant="h2" style={{color:`${theme.palette.primary.main}`}}>Ne Öneriyoruz?</Typography>
          </Grid>
          <Grid item>
            {" "}
            <Typography variant="body1">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like)
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <SectionDivider title={"Müşteri Yorumları ve Görüşleri"} paragraph={"Aramıza katılmadan önce müşterilerimizin yorumlarına göz atıp kararını hemen verebilirsin"} />
      <Grid container direction="row"  alignItems="center" justify="center" style={{marginBottom:'100px', marginTop:"50px"}}>
      <Testimonial businessImage={BeautyShopImage} businessName="Byce Erkek Kuaförü" text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." businessOwner="İsa Çapar" />
      <Testimonial businessImage={DentistStore} businessName="Can Met Polikliniği" text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." businessOwner="Harun Sütcü" />
      <Testimonial businessImage={EntertainmentSaloon} businessName="Point Bornova AVM" text="Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated" businessOwner="Hülya Bozkurt" />
      </Grid>
    </div>
  );
};

export default aboutUs;
