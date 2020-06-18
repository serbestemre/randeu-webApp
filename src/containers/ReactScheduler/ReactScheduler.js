import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';

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


const reactScheduler = (props) => {
const {appointments} = props;
const [data, setData] = useState(appointments)
const [currentDate, setCurrentDate] = useState(Date.now());


useEffect(() => {

// if(appointments && appointments.length > 0){
//   let newAppointments =[];

//   appointments.forEach((item, index) => {
//     newAppointments.push({title:item.businessName, startDate:item.startDate, endDate:item.endDate})
//   })
  
//   console.log("APPOINTMENTS => ", newAppointments);
  
  setData(appointments)


},[appointments])

const currentDateChange = (currentDateParam)=> {
setCurrentDate(currentDateParam);
}

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
            startDayHour={0} // mesai başlangıç saati
            endDayHour={24} // mesait bitiş saati
            cellDuration={30} // randevu aralığı
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