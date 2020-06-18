import React, {useEffect, useState} from "react";
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
import { useSelector  } from 'react-redux';


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
        <Box p={2} style={{backgroundColor: "transparent"}}>
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
    fontWeight: "bold",
  }
}));

export default function SimpleTabs(props) {

  const {businessTypes, services, businesses} = props;
  const [servicesList, setServicesList] = useState(services);
  const [businessTypesList, setBusinessTypesList]= useState();
  const [businessList, setBusinessList] = useState();

  const servicesListError = useSelector(state => {
    return state.servicesListError
  });


  const businessTypesListError = useSelector(state =>{
    return state.businessTypesListError
  })


  const businessListError = useSelector(state => {
    return state.businessListError
  })

useEffect(() => {
  setServicesList(services)
},[services])

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        setServicesList(services);
        break;
      case 1:
        setBusinessTypesList(businessTypes);
        break;
      case 2:
        setBusinessList(businesses);
        break;
      default:
        setServicesList(services);
        break;
    }
    setValue(newValue);
  };

  return (
    <Grid container justify="center" alignItems={"center"}>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <div className={classes.root}>
          {/* Search Bar Color Preferences */}
          <AppBar position="static" style={{backgroundColor: `${theme.palette.primary.contrastText}`, color:`${theme.palette.secondary.main}`}}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
  
            <Tab className={classes.tabRoot}
                   label="HİZMET TİPİ" id={"tab1"} aria-controls="aria-tab1"/>
   
            <Tab className={classes.tabRoot}
                   label="İŞYERİ TÜRÜ" id={"tab2"} aria-controls="aria-tab2"/>
       
    
            <Tab className={classes.tabRoot}
                   label="İŞYERİ ADI" id={"tab3"} aria-controls="aria-tab3"/>
            
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0}>
            <TabForm searchedType={"hizmet-tipi"} list={servicesList} error={servicesListError} optionLabel={(opt) => opt.serviceName} textFieldPlaceholder={"Hizmet tipi yazın..."}/>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <TabForm searchedType={"isyeri-turu"} list={businessTypesList} error={businessTypesListError} optionLabel={(opt) => opt.businessTypeName} textFieldPlaceholder={"İşyeri tipi yazın..."}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TabForm searchedType={"isyeri-adi"} list={businessList} error={businessListError} optionLabel={(opt) => opt.businessName}textFieldPlaceholder={"İşyeri adını yazın..."}/>
          </TabPanel>
        </div>
      </Grid>
    </Grid>

  );
}
