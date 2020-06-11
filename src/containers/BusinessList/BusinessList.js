import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import BusinessCard from "../../components/Card/BusinessCard/BusinessCard";
import TabBar from "../../components/TabBar/TabBar";
import * as actions from "../../store/actions/index";
import { Grid, Typography } from "@material-ui/core";
import FullCalendar from "../FullCalendar/FullCalendar";
const businessList = (props) => {
  const { searchedKeyword } = props;

  console.log("SEARCHED KEY WORD PROP: ", searchedKeyword);

  const dispatch = useDispatch();

  const businessTypesList = useSelector((state) => {
    return state.appointment.businessTypesList;
  });

  const servicesList = useSelector((state) => {
    return state.appointment.servicesList;
  });

  const businessList = useSelector((state) => {
    return state.appointment.businessList;
  });
  const searchResultList = useSelector((state) => {
    return state.appointment.searchResultList;
  });

  const onInitSearchByBusinessTypeName = useCallback(
    () => dispatch(actions.initSearchByBusinessTypeName(searchedKeyword)),
    [dispatch]
  );
  const onInitBusinessTypesList = useCallback(
    () => dispatch(actions.initBusinessTypesList()),
    [dispatch]
  );
  const onInitServicesList = useCallback(
    () => dispatch(actions.initServicesList()),
    [dispatch]
  );
  const onInitBusinessList = useCallback(
    () => dispatch(actions.initBusinessList()),
    [dispatch]
  );

  useEffect(() => {
    onInitBusinessTypesList();
  }, [onInitBusinessTypesList]);

  useEffect(() => {
    onInitServicesList();
  }, [onInitServicesList]);

  useEffect(() => {
    onInitBusinessList();
  }, [onInitBusinessList]);

  useEffect(() => {
    onInitSearchByBusinessTypeName();
  }, [onInitSearchByBusinessTypeName]);

  const handleCardClick = () => {
    console.log("card clicked");
  };

  const handleProfileClick = () => {
    console.log("profile clicked");
  };

  const handleCalendarClick = () => {
    console.log("calender clicked");
  };

  return (
    <Grid container direction="row" justify="space-between">
      <Grid item md={4}>
        <Grid item container direction="column">
          <Grid
            item
            style={{ backgroundColor: "#efefef", border: "1px solid" }}
          >
            <TabBar
              businessTypes={businessTypesList}
              services={servicesList}
              businesses={businessList}
            />

            {searchResultList &&
              searchResultList.map((business) => (
                <BusinessCard
                  cardClickhandler={handleCardClick}
                  calendarOnClick={handleCalendarClick}
                  profileOnClick={handleProfileClick}
                  businessName={business.businessName}
                  employees={business.employeeList}
                  commentCount={Math.floor(Math.random() * (100 - 30) + 30)}
                />
              ))}
          </Grid>
        </Grid>
      </Grid>

      <Grid item style={{ backgroundColor: "wheat" }} md={7}>
        <FullCalendar
          events={[
            { title: "event 1", date: "2020-06-11" },
            { title: "event 2", date: "2020-06-11" },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default businessList;
