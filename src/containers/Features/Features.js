import React from 'react';
import {Grid} from "@material-ui/core";
import FeatureCard from "../../components/Card/FeatureCard/FeatureCard";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SpeedIcon from "@material-ui/icons/Speed";
import CameraOutlinedIcon from "@material-ui/icons/CameraOutlined";
import SectionDivider from '../../components/SectionDivider/SectionDivider';

const Features = () => {
  return (
    <div>

      <SectionDivider
        title={"Neden Randeu?"}
        paragraph={"Kullanıcıların farklı sektörlerden randevu almasını ve takip\n" +
        "etmesini sağlayan, iş yerlerinin randevu süreçlerini organize\n" +
        "eden ve iş analizi raporları sunan sanal bir randevu asistanı"}/>

    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      alignContent="center"
      >

      <FeatureCard
        title={"7/24"}
        maxWidth={"345px"}
        contentText={
          "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
        }
        icon={<AccessTimeIcon fontSize="large" color="secondary"/>}
      />
      <FeatureCard
        title={"Hızlı"}
        maxWidth={"345px"}
        icon={<SpeedIcon fontSize="large" color="secondary"/>}
        contentText={
          "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
        }
      />

      <FeatureCard
        icon={<CameraOutlinedIcon fontSize="large" color="secondary"/>}
        title={"Çeşitli"}
        maxWidth={"345px"}
        contentText={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature belief, Lorem Ipsum is not simply random text. It has roots in a piece of from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College"
        }
      />

      <FeatureCard
        title={"Hızlı"}
        maxWidth={"345px"}
        icon={<SpeedIcon fontSize="large" color="secondary"/>}
        contentText={
          "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
        }
      />

    </Grid>
    </div>
  )
};

export default Features;