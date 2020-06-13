import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import {
  Scheduler,
  ViewSwitcher,
  DayView,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  AppointmentTooltip,
  TodayButton,
  AllDayPanel
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from './today-appointments';


const reactScheduler = (props) => {
const [data, setData] = useState(appointments)
const [currentDate, setCurrentDate] = useState(Date.now());

const currentDateChange = (currentDateParam)=> {
setCurrentDate(currentDateParam);
}


const styles = theme => ({
  container: {
    display: 'flex',
    marginBottom: theme.spacing(2),
    justifyContent: 'flex-end',
  },
  text: {
    ...theme.typography.h6,
    marginRight: theme.spacing(2),
  },
});


    return (
 
      <Paper>
        <Scheduler
          data={data}
          locale="tr-TR"
        >
        
         <ViewState
            currentDate={currentDate}
            onCurrentDateChange={currentDateChange}
            name="tr-TR"
          />
          <DayView
          name="Günlük"
            startDayHour={9} // mesai başlangıç saati
            endDayHour={18} // mesait bitiş saati
            cellDuration={20} // randevu aralığı
          />
          <WeekView
            name="Haftalık"
            startDayHour={9} // mesai başlangıç saati
            endDayHour={19} // mesait bitiş saati
          />
           <Toolbar />
           <ViewSwitcher/>
          <DateNavigator />
          <TodayButton messages={{today:"Bugün"}} />
          <Appointments />
          <AllDayPanel
              messages="tr-TR"
            />
          <AppointmentTooltip />
        </Scheduler>
      </Paper>

    );
}

export default reactScheduler;