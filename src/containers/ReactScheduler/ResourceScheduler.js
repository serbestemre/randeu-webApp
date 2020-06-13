import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";
import Paper from "@material-ui/core/Paper";
import { green, lightBlue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import moment from 'moment-timezone';

import {
  ViewState,
  EditingState,
  GroupingState,
  IntegratedGrouping,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Resources,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DragDropProvider,
  GroupingPanel,
  WeekView,
  MonthView,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  DayView,
  TodayButton,
  AllDayPanel,
} from "@devexpress/dx-react-scheduler-material-ui";

const isWeekOrMonthView = (viewName) =>
  viewName === "Week" || viewName === "Month";

const priorityData = [
  { text: "Business Owner", id: "5e8099790c15944a5cb4626b", color: lightBlue },
  { text: "Employee", id: "5e80a7f1b4f67306f848af86", color: green },
];

const styles = ({ spacing, palette, typography }) => ({
  formControlLabel: {
    padding: spacing(2),
    paddingLeft: spacing(10),
  },
  text: {
    ...typography.caption,
    color: palette.text.secondary,
    fontWeight: "bold",
    fontSize: "1rem",
  },
});

const GroupOrderSwitcher = withStyles(styles, {
  name: "ResourceSwitcher",
})(({ isGroupByDate, onChange, classes }) => (
  <FormControlLabel
    control={
      <Checkbox checked={isGroupByDate} onChange={onChange} color="primary" />
    }
    label="Group by Date First"
    className={classes.formControlLabel}
    classes={{ label: classes.text }}
  />
));



const resourceScheduler = (props) => {
  const [currentDate, setCurrentDate] = useState(Date.now());

  const currentDateChange = (currentDateParam) => {
    setCurrentDate(currentDateParam);
  };

  useEffect(() => {
    console.log("CURRENT DATE=>", currentDate)
  },[currentDate])
  const dispatch = useDispatch();

  const appointmentSchedule = useSelector((state) => {
    return state.schedule.appointmentSchedule;
  });

  const onInitAppointmentSchedule = useCallback(
    (startDate, endDate, businessId) =>
      dispatch(
        actions.initFetchBusinessAppointmentSchedule(
          startDate,
          endDate,
          businessId
        )
      ),
    [dispatch]
  );

  useEffect(() => {
    onInitAppointmentSchedule(
      currentDate,
      "5e80a919083af51738bf0b43"
    );
  }, [onInitAppointmentSchedule, currentDate]);
  
  const [data, setData] = useState([]);

useEffect(() => {
  setData(appointmentSchedule)
},[appointmentSchedule])

  this.state = {
    resources: [
      {
        fieldName: "employee",
        title: "Çalışan",
        instances: priorityData,
      },
    ],
    grouping: [
      {
        resourceName: "employee",
      },
    ],
    groupByDate: isWeekOrMonthView,
    isGroupByDate: true,
  };

  useEffect(() => {
    if(appointmentSchedule){

    }
  },[appointmentSchedule])

  this.onGroupOrderChange = () => {
    const { isGroupByDate } = this.state;
    this.setState({
      isGroupByDate: !isGroupByDate,
      groupByDate: isGroupByDate ? undefined : isWeekOrMonthView,
    });
  };

  const commitChanges = ({ added, changed, deleted }) => {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return { data };
    });
  };

  const doubleClicked = (obj) => {
    console.log("double clicked", obj)
  }

  console.log("RESOURCE SCHEDULER FETCHED=>", appointmentSchedule);

  const {  resources, grouping, groupByDate, isGroupByDate } = this.state;
  

  return (
    <React.Fragment>
      <GroupOrderSwitcher
        isGroupByDate={isGroupByDate}
        onChange={this.onGroupOrderChange}
      />
      <Paper>
        <Scheduler data={data} locale="tr-TR">
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={currentDateChange}
            name="tr-TR"
          />
          <EditingState onCommitChanges={this.commitChanges} />
          <GroupingState grouping={grouping} groupByDate={groupByDate} />

          <DayView
            name="Günlük"
            startDayHour={9} // mesai başlangıç saati
            endDayHour={20} // mesait bitiş saati
            cellDuration={30} // randevu aralığı
          />
          <WeekView startDayHour={8.5} endDayHour={20}  />
          <MonthView />

          <Appointments />
          <Resources data={resources} mainResourceName="employee" />
          <IntegratedGrouping />
       

          <AppointmentTooltip />
          <AppointmentForm />

          <Toolbar />
          <DateNavigator />
          <TodayButton messages={{ today: "Bugün" }} />

          <ViewSwitcher />
          <GroupingPanel />
          <AllDayPanel messages="tr-TR" onDoubleClick={doubleClicked} />

          <AppointmentTooltip />
        </Scheduler>
      </Paper>
    </React.Fragment>
  );
};

export default resourceScheduler;
