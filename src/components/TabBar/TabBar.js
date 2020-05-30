import React, {useState} from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {fade} from "@material-ui/core/styles/colorManipulator";
import TabForm from './TabForm/TabFrom';
import { useTheme } from "@material-ui/core/styles";


function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{backgroundColor: "transparent"}}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: fade(theme.palette.background.paper, 0.8),
  },
  tabRoot: {
    fontWeight: "bold"
  }
}));

export default function SimpleTabs() {

  const businessNames = [
    {title: "Altın Makas Erkek Kuaförü"},
    {title: "Byce Erkek Kuaförü"},
    {title: "Can Met Diş Polikliniği"},
    {title: "Elit Halısaha"},
    {title: "Homeros Vadisi Paintball"},
  ];

  const serviceList = [
    {title: "Saç Kesim"},
    {title: "Göz Muayenesi"},
    {title: "Paintball"}
  ];

  const businessTypeList = [
    {title: "Erkek Kuaförü"},
    {title: "Güzellik Merkezi"},
    {title: "Göz Doktoru"},
    {title: "Diş Doktoru"},
    {title: "Halısaha"},
    {title: "Paintball"},
  ];

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [list, setList] = useState(serviceList);
  const theme = useTheme();
  
  const handleChange = (event, newValue) => {
    console.log("new value=> ", newValue);
    switch (newValue) {
      case 0:
        setList(serviceList);
        break;
      case 1:
        setList(businessTypeList);
        break;
      case 2:
        setList(businessNames);
        break;
      default:
        setList(serviceList);
    }
    setValue(newValue);
  };

  return (
    <Grid container justify="center" alignItems={"center"}>
      <Grid item sm={10}md={12} xl={10}>
        <div className={classes.root}>
          {/* Search Bar Color Preferences */}
          <AppBar position="static" style={{ backgroundColor: `${theme.palette.primary.contrastText}`, color:`${theme.palette.secondary.main}`}}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
            <Grid item xs={4}>
            <Tab className={classes.tabRoot}
                   label="HİZMET TİPİ" id={"tab1"} aria-controls="aria-tab1"/>
            </Grid>
            <Grid item xs={4}>
            <Tab className={classes.tabRoot}
                   label="İŞYERİ TÜRÜ" id={"tab2"} aria-controls="aria-tab2"/>
            </Grid>
            <Grid item xs={4}>
            <Tab className={classes.tabRoot}
                   label="İŞYERİ ADI" id={"tab3"} aria-controls="aria-tab3"/>
            </Grid>
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0}>
            <TabForm list={list} textFieldPlaceholder={"Hizmet tipi yazın..."}/>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <TabForm list={list} textFieldPlaceholder={"İşyeri tipi yazın..."}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TabForm list={list} textFieldPlaceholder={"İşyeri adını yazın..."}/>
          </TabPanel>
        </div>
      </Grid>
    </Grid>

  );
}
