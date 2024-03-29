import React from "react";
import Banner from "../../containers/Banner/Banner";
import { Grid, Typography } from "@material-ui/core";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import Testimonial from "../../components/Testimonial/Testimonial";
import BeautyShopImage from "../../assets/images/beauty-shop.jpg";
import DentistStore from "../../assets/images/dentist-store.jpg";
import EntertainmentSaloon from "../../assets/images/bowling-saloon.jpg";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  sectionGrid: {
    paddingTop: "50px",
  },
}));

const aboutUs = (props) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div>
      <Banner bannerTitle="Hakkımızda" />
      {/* <BusinessRegisterBar
        title="İşyeriniz mi var?"
        paragraph="Bir çok kolaylıktan ücretsiz faydalanmak için"
      /> */}
      <Grid
        className={classes.sectionGrid}
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid container item direction="column" xs={12} sm={6} md={5}>
          <Grid item>
            <Typography
              gutterBottom
              variant="h2"
              style={{ color: `${theme.palette.secondary.main}` }}
            >
              Biz Kimiz?
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Biz farklı sektörlerden randevu almanızı ve takıp etmenızı
              saglayan, randevu alma sürecını ıyılestıren sanal bır asıstanız.
              Kullanıcılar için hızlı, kolay ve güvenilir bir randevu deneyimi
              sunarken, iş yerlerimize daha fazla müşteriye ulaşma imkanı sunup,
              daha görünür olmalarını sağlıyoruz.
            </Typography>{" "}
          </Grid>
        </Grid>
        <Grid container item direction="column" xs={12} sm={6} md={5}>
          <Grid item>
            <Typography
              gutterBottom
              variant="h2"
              style={{ color: `${theme.palette.primary.main}` }}
            >
              Ne Öneriyoruz?
            </Typography>
          </Grid>
          <Grid item>
            {" "}
            <Typography variant="body1">
              Yaşam boyu sıkca ihtiyaç duyduğumuz ve genellikle bizim için zaman
              kaybı oluşturan randevu alma eylemini, herhangi bir aracıya
              ihtiyaç duymadan, dilediğiniz yerden ve dilediğiniz zaman, iş
              yerlerinin değerlendirmelerine ve yorumlarına bakarak çok hızlı
              bir şekilde halledebilirsiniz. Her an size sadece birkaç saniye
              uzaklıkta olan kişisel randevu asistanınızla hayatınızı
              kolaylaştırabilirsiniz.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <SectionDivider
        title={"Müşteri Yorumları ve Görüşleri"}
        paragraph={
          "Aramıza katılmadan önce müşterilerimizin yorumlarına göz atıp kararını hemen verebilirsin"
        }
      />
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        style={{ marginBottom: "100px", marginTop: "50px" }}
      >
        <Testimonial
          businessImage={BeautyShopImage}
          businessName="Byce Erkek Kuaförü"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          businessOwner="İsa Çapar"
        />
        <Testimonial
          businessImage={DentistStore}
          businessName="Can Met Polikliniği"
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
          businessOwner="Harun Sütcü"
        />
        <Testimonial
          businessImage={EntertainmentSaloon}
          businessName="Point Bornova AVM"
          text="Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated"
          businessOwner="Hülya Bozkurt"
        />
      </Grid>
    </div>
  );
};

export default aboutUs;
