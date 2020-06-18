import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";
import Paper from "@material-ui/core/Paper";
import { green, lightBlue } from "@material-ui/core/colors";
import { withRouter } from "react-router-dom";
import WarningDialog from "../../components/WarningDialog/WarningDialog"
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
} from "@devexpress/dx-react-scheduler-material-ui";

const messages = {
  moreInformationLabel: "",
};


const SelectMenu = (props) => {
  console.log("SELECT MENU PROP", props.services);
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === "multilineTextEditor") {
    return null;
  }
  return <AppointmentForm.Select {...props} />;
};

const BasicLayout = ({
  onFieldChange,
  appointmentData,
  services,
  ...restProps
}) => {
  const onServiceFieldChange = (nextValue) => {
    onFieldChange({ service: nextValue });
  };

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label text="Hizmet Seçin" type="title" />

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


let priorityData = [
  { text: "Business Owner", id: "5e8099790c15944a5cb4626b", color: lightBlue },
  { text: "Employee", id: "5e80a7f1b4f67306f848af86", color: green },
];


const resourceScheduler = (props) => {
  const dispatch = useDispatch();
  const [warning, setWarning] = useState(false);

  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(Date.now());
  const { selectedBusinessId } = props;
  const [employeeList, setEmployeeList] = useState();
  const onInitBusinessEmployeeList = useCallback(
    (selectedBusinessId) =>
      dispatch(actions.initBusinessEmployeelist(selectedBusinessId)),
    [dispatch]
  );
  const onInitProvidingServiceList = useCallback(
    (selectedBusinessId) =>
      dispatch(actions.initProvidingServiceList(selectedBusinessId)),
    [dispatch]
  );
  const [serviceList, setServiceList] = useState();
  const [services, setServices] = useState({
    id: "1",
    text: "Servisler yükleniyor...",
  });
  const businessEmployeelist = useSelector((state) => {
    return state.business.employeelist;
  });

  const providingServiceList = useSelector((state) => {
    return state.business.providingServiceList;
  });

  useEffect(() => {
    onInitBusinessEmployeeList(selectedBusinessId);
    onInitProvidingServiceList(selectedBusinessId);
    if (businessEmployeelist) {
      setEmployeeList(businessEmployeelist.populatedEmployeeList);
    }
    if (providingServiceList) {
      setServiceList(providingServiceList);
    }
  }, [selectedBusinessId]);

  useEffect(() => {
    if (businessEmployeelist) {
      setEmployeeList(businessEmployeelist);
    }
  }, [businessEmployeelist]);

  useEffect(() => {
    if (providingServiceList) {
      setServiceList(providingServiceList);
    }
  }, [providingServiceList]);

  const currentDateChange = (currentDateParam) => {
    setCurrentDate(currentDateParam);
  };

  const [resources, setResources] = useState([
    {
      fieldName: "employee",
      title: "Çalışan",
      instances: priorityData,
    },
  ]);

  const onInitScheduleAppointment = useCallback(
    (selectedBusinessId, employee, service, startDate, endDate) =>
      dispatch(
        actions.initScheduleAppointment(
          selectedBusinessId,
          employee,
          service,
          startDate,
          endDate
        )
      ),
    [dispatch]
  );
  // const scheduleRequestMessage = useSelector((state) => {
  //   return state.schedule.scheduleRequestMessage;
  // });
  const token = useSelector((state) => {
    return state.auth.token;
  });

  useEffect(() => {
    if (employeeList && employeeList.length > 0) {
      let newEmplist = [];

      employeeList.forEach((emp) => {
        newEmplist.push({ text: emp.fullName, id: emp._id, color: green });
        priorityData = newEmplist;
      });
      setResources([
        {
          fieldName: "employee",
          title: "Çalışan Seçin",
          instances: newEmplist,
        },
      ]);
    }
  }, [employeeList]);

  useEffect(() => {
    let newServiceList = [];
    if (serviceList && serviceList.length > 0) {
      serviceList.forEach((service) => {
        newServiceList.push({ id: service._id, text: service.serviceName });
      });
    }
    setServices(newServiceList);
  }, [serviceList]);

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

  const [grouping] = useState([
    {
      resourceName: "employee",
    },
  ]);

  const handleCancel = () =>{
    setWarning(false)
}

const handleLogin = () => {
    props.history.push("/kullanici/giris");
}

  const commitChanges = ({ added, changed, deleted }) => {
    const { employee, service, startDate, endDate } = added;

    if(!token) {
      console.log("SHOW DIALOG!")
      setWarning(true)
      return;
    }

    if(token) {
      console.log("CLOSE DIALOG!")
      setWarning(false);
    }


    if(token) {
      onInitScheduleAppointment(
        selectedBusinessId,
        employee,
        service,
        startDate,
        endDate
      );
  
    }
    // if(token){
    //   onInitUserProfile(token)
    // }

    if (added && token) {
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
      setData(newData);
      if (deleted !== undefined) {
        const filteredData = data.filter(
          (appointment) => appointment.id !== deleted
        );
        setData(filteredData);
      }
      return data;
    }
  };

  return (
    <React.Fragment>
      <WarningDialog handleCancel={handleCancel} handleLogin={handleLogin} open={warning}/>
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
          <WeekView  name="Haftalık" startDayHour={8.5} endDayHour={20} />
          <MonthView name="Aylık" />

          <Appointments />
          <Resources data={resources} mainResourceName="employee" />
          <IntegratedGrouping />

          <AppointmentTooltip />
          {/* <AppointmentForm /> */}
          <AppointmentForm
            basicLayoutComponent={(restProps) => (
              <BasicLayout services={services} {...restProps} />
            )}
            selectComponent={SelectMenu}
            messages={messages}
            dateEditorComponent={(props) => (
              <AppointmentForm.DateEditor excludeTime={true} readOnly={true} />
            )}
          />
          {/* <AppointmentForm  dateEditorComponent={AppLayout} commandLayoutComponent={CommandLayout} /> */}
          {/* <AppointmentForm layoutComponent={BasicLayout} /> */}

          <Toolbar />
          <DateNavigator />
          <TodayButton messages={{ today: "Bugün" }} />

          <ViewSwitcher />
          <GroupingPanel />
          {/* <AllDayPanel messages="tr-TR" onDoubleClick={doubleClicked} /> */}

          <AppointmentTooltip />
        </Scheduler>
      </Paper>
    </React.Fragment>
  );
};

export default withRouter(resourceScheduler);
