import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";
import Paper from "@material-ui/core/Paper";
import { green, lightBlue } from "@material-ui/core/colors";
import CommandLayout from "./CommandLayout"
import { withRouter } from "react-router-dom";
import AppLayout from './AppLayout'
// import BasicLayout from './BasicLayout'
import {
  ViewState,
  EditingState,
  GroupingState,
  IntegratedGrouping,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Resources,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
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

const messages = {
  moreInformationLabel: '',
};


const services = [
  {id:"5e8099240c15944a5cb46269", text:"Saç kesim"},

]

const SelectMenu = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === 'multilineTextEditor') {
    return null;
  } return <AppointmentForm.Select {...props} />;
};

const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
  const onServiceFieldChange = (nextValue) => {
    onFieldChange({service: nextValue});
  }

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label
      text="Hizmet Seçin"
      type="title"
    />
      
      <AppointmentForm.Select
      value={appointmentData.service}
      onValueChange={onServiceFieldChange}
      availableOptions={services}
      placeholder="Service field"
      type="outlinedSelect"
      />
    </AppointmentForm.BasicLayout>
  );
};

const isWeekOrMonthView = (viewName) =>
  viewName === "Week" || viewName === "Month";

let priorityData = [
  { text: "Business Owner", id: "5e8099790c15944a5cb4626b", color: lightBlue },
  { text: "Employee", id: "5e80a7f1b4f67306f848af86", color: green },
];

// const generateEmpData = (employeeList) => {
//   let newEmplist = [];

//   employeeList.forEach((emp) => {
//     newEmplist.push({ text: emp.fullName, id: emp._id, color: green });
//     priorityData = newEmplist;
//   });
//   return newEmplist;
// };


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

const resourceScheduler = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(Date.now());
  const { selectedBusinessId } = props;
  const [employeeList, setEmployeeList] = useState();
  const onInitBusinessEmployeeList =useCallback((selectedBusinessId) =>dispatch(actions.initBusinessEmployeelist(selectedBusinessId)), [dispatch]);
 
useEffect(() => {
  onInitBusinessEmployeeList(selectedBusinessId)
  if(businessEmployeelist){
    setEmployeeList(businessEmployeelist.populatedEmployeeList)
  }
},[selectedBusinessId])


const businessEmployeelist = useSelector(state => {
  return state.business.employeelist
});
useEffect(() => {
  if(businessEmployeelist){
    setEmployeeList(businessEmployeelist)
  }
},[businessEmployeelist])


  const currentDateChange = (currentDateParam) => {
    setCurrentDate(currentDateParam);
  };

  const [resources, setResources] = useState([
    {
      fieldName: "employee",
      title: "Çalışan",
      instances: priorityData,
    },
  ])
  const onInitScheduleAppointment =useCallback(( selectedBusinessId, employee, service, startDate, endDate) =>dispatch(actions.initScheduleAppointment( selectedBusinessId, employee, service, startDate, endDate)), [dispatch]);
  const scheduleRequestMessage = useSelector(state => {
    return state.schedule.scheduleRequestMessage
  });

  useEffect(() => {
    if (employeeList && employeeList.length > 0) {

     let newEmplist = [];

      employeeList.reverse().forEach((emp) => {
      newEmplist.push({ text: emp.fullName, id: emp._id, color: green });
      priorityData = newEmplist;
      });
      setResources([
        {
          fieldName: "employee",
          title: "Çalışan Seçin",
          instances: newEmplist,
        },
      ])
    }
  }, [employeeList]);

  useEffect(() => {}, [currentDate]);


  const appointmentSchedule = useSelector((state) => {
    return state.schedule.appointmentSchedule;
  });

  const onInitAppointmentSchedule = useCallback(
    (startDate, businessId) =>
      dispatch(
        actions.initFetchBusinessAppointmentSchedule(startDate, businessId)
      ),
    [dispatch]
  );

  useEffect(() => {
    if (selectedBusinessId) {
      onInitAppointmentSchedule(currentDate, selectedBusinessId);
    }
  }, [onInitAppointmentSchedule, currentDate, selectedBusinessId]);

  useEffect(() => {
    setData(appointmentSchedule);
  }, [appointmentSchedule, onInitAppointmentSchedule]);


const [grouping, setGrouping] = useState(  [
  {
    resourceName: "employee",
  },
])



  const commitChanges = ({ added, changed, deleted }) => {
    const { employee, service, startDate, endDate,  } = added;
    onInitScheduleAppointment( selectedBusinessId, employee, service, startDate, endDate);


      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        setData([...data, { id: startingAddedId, ...added }]);
      }
      if (changed) {
        const newData = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
        setData(newData)
      if (deleted !== undefined) {
        const filteredData = data.filter((appointment) => appointment.id !== deleted);
        setData(filteredData)
      }
      return data;
    }
  };

  const doubleClicked = (obj) => {

  };

  return (
    <React.Fragment>
      <Paper>
        <Scheduler data={data} locale="tr-TR">
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={currentDateChange}
            name="tr-TR"
          />
          <EditingState onCommitChanges={commitChanges} />
          <GroupingState grouping={grouping} />

          <DayView
            name="Günlük"
            startDayHour={9} // mesai başlangıç saati
            endDayHour={20} // mesait bitiş saati
            cellDuration={30} // randevu aralığı
          />
          <WeekView startDayHour={8.5} endDayHour={20} />
          <MonthView />

          <Appointments />
          <Resources data={resources} mainResourceName="employee" />
          <IntegratedGrouping />

          <AppointmentTooltip  />
          {/* <AppointmentForm /> */}
          <AppointmentForm basicLayoutComponent={BasicLayout}   selectComponent={SelectMenu}
            messages={messages}/>          
          {/* <AppointmentForm dateEditorComponent={AppLayout} commandLayoutComponent={CommandLayout} /> */}
          {/* <AppointmentForm layoutComponent={BasicLayout} /> */}

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

export default withRouter(resourceScheduler);
