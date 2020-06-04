import React from "react";
import { Grid } from "@material-ui/core";
import FeatureCard from "../../components/Card/FeatureCard/FeatureCard";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SpeedIcon from "@material-ui/icons/Speed";
import CameraOutlinedIcon from "@material-ui/icons/CameraOutlined";
import SectionDivider from "../../components/SectionDivider/SectionDivider";

const Features = () => {
  return (
    <div>
      <SectionDivider
        title={"Neden Randeu?"}
        paragraph={
          "Kullanıcıların farklı sektörlerden randevu almasını ve takip\n" +
          "etmesini sağlayan, iş yerlerinin randevu süreçlerini organize\n" +
          "eden ve iş analizi raporları sunan sanal bir randevu asistanı"
        }
      />

      <Grid
        container
        direction="row"
        justify="space-evenly"
      >
        <FeatureCard
          title={"7/24"}
          contentText={
            "Zaman farkı gözetmeksizin, istediğiniz zaman dilediğiniz yerden randevu talebi oluşturun"
          }
          icon={<AccessTimeIcon fontSize="large" color="secondary" />}
        />
        <FeatureCard
          title={"Hızlı"}
          icon={<SpeedIcon fontSize="large" color="secondary" />}
          contentText={
            "Bir kaç tıklamayla dilediğin zaman randevu talebini oluştur hemen onaylansın"
          }
        />

        <FeatureCard
          icon={<CameraOutlinedIcon fontSize="large" color="secondary" />}
          title={"Çeşitli"}
          contentText={
            "Geniş sektör yelpazesi ile bir günlük kullanım değil, ihtiyaç duyduğunuz her an kullanabileceğiniz size özel bir randevu asistanı"
          }
        />

        <FeatureCard
          title={"Ücretsiz"}
          icon={<SpeedIcon fontSize="large" color="secondary" />}
          contentText={
            "RANDEU'nun sunduğu tüm hizmetlere ücretsiz erişin"
          }
        />
      </Grid>
    </div>
  );
};

export default Features;
