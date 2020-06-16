import React from "react";
import { Grid } from "@material-ui/core";
import SectorCard from "../../components/Card/SectorCard/SectorCard";
import SectionDivider from "../../components/SectionDivider/SectionDivider";

const Sectors = () => {

const healthBusinessTypes = [
  {id:1, title:"Diş Doktoru"},
  {id:2, title:"Göz Doktoru"},
  {id:3, title:"Estetik Uzmanı"},
]
const personalcareBusinessTypes = [
  {id:1, title:"Erkek & Kadın Kuaförü"},
  {id:2, title:"Güzellik Merkezi"},
  {id:3, title:"SPA & Sauna Merkezi"},
]
const entertainmentBusinessTypes = [
  {id:1, title:"Halısaha"},
  {id:2, title:"Paintball"},
  {id:3, title:"Bownling"},
]

  
  return (
    <div style={{backgroundColor:"#e0f7fa", paddingBottom:"50px"}}>
      <SectionDivider
        title={"Sektörler ve Hizmetler"}
        paragraph={
          "Tek bir uygulama üzerinden birden fazla sektörden randevu almak artık mümkün!"
        }
      />

      <Grid container direction="row" justify="space-evenly" >
        <SectorCard
         businessTypeList={healthBusinessTypes}
          header="Sağlık"
          imageSrc={
            "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
          }
        />
        <SectorCard
                 businessTypeList={personalcareBusinessTypes}

          header="Kişisel Bakım"
          imageSrc={
            "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          }
        />
        <SectorCard
                 businessTypeList={entertainmentBusinessTypes}

          header="Eğlence"
          imageSrc={
            "https://images.unsplash.com/photo-1588432815128-363254491e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          }
        />
      </Grid>
    </div>
  );
};

export default Sectors;
