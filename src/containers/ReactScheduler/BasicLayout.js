import React, {useState, useEffect} from 'react';
import {Grid, Typography} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';

const appLaylout = () => {

    const hizmetler = [
        {id:"5e8099240c15944a5cb46269",title:"Saç Kesim"},
        {id:"5e80992a0c15944a5cb4626a",title:"Sakal Kesim"},
    ]  

    const employeList = [
        {_id:"5e8099790c15944a5cb4626b", fullName:"Çalışan1"},
        {_id:"5e80a7f1b4f67306f848af86", fullName:"Çalışan2"}
    ]

    const [service, setService] = React.useState('');
    const [employee, setEmployee] = React.useState('');

    const handleServiceChange = (event) => {
    setService(event.target.value);
    console.log("serv:",event.target.value)
};
    const handleEmployeeChange = (event) => {
        setEmployee(event.target.value);
      console.log("emp:",event.target.value)
    };

    const appointmentRequestHandler = () => {

    }

    return (
       <Grid container direction="row" spacing={2} style={{paddingTop:"10%", paddingLeft:"10%"}}>
          <Grid item md={10} style={{color:"red", marginBottom:"10px"}}> <Typography style={{display:"inline"}} gutterBottom variant="h6">Lütfen Randevu Bilgilerinizi Eksiksiz Doldurun</Typography></Grid>
             
          <Grid item md={8}>

        <InputLabel  id="demo-simple-select-label">Lütfen Almak İstediğiniz Hizmeti seçin</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service}
          onChange={handleServiceChange}
          fullWidth
        >
            {hizmetler.map((hiz) => <MenuItem id={hiz.id} value={hiz.id}>{hiz.title}</MenuItem>)}
        </Select>
  
           </Grid>
           <Grid item md={8}>
           <InputLabel id="demo-simple-select-label">Lütfen Çalışan Seçin</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={employee}
          onChange={handleEmployeeChange}
          fullWidth
        >
            {employeList.map((emp) => <MenuItem id={emp._id+4} value={emp._id}>{emp.fullName}</MenuItem>)}
        </Select>
  

          </Grid>
          <Grid item md={8}>
                <Button color="primary" fullWidth variant="contained" onClick={appointmentRequestHandler}>Randevu Al</Button>

                </Grid>
          <Grid container direction="column" justify="flex-end">
                
          </Grid>
       </Grid>
    )
}

export default appLaylout;