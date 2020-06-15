import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BusinessCard from "../../components/Card/BusinessCard/BusinessCard";
import TabBar from "../../components/TabBar/TabBar";
import * as actions from "../../store/actions/index";
import { Grid, Typography } from "@material-ui/core";
import ResourceScheduler from "../ReactScheduler/ResourceScheduler";
import { withRouter } from "react-router-dom";

const businessList = (props) => {
  const [queryParams, setQueryParams] = useState(props.match.params && props.match.params);
  const [selectedBusinessId, setSelectedBusinessId] = useState();
  const [selectedBusinessEmployeeList, setSelectedBusinessEmployeeList] = useState();

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
    () =>
      dispatch(
        actions.initSearchByBusinessTypeName(queryParams.searchedKeyword)
      ),
    [dispatch]
  );

  const onInitSearchByServiceName = useCallback(
    () =>
      dispatch(actions.initSearchByServiceName(queryParams.searchedKeyword)),
    [dispatch]
  );

  const onInitSearchByBusinessName = useCallback(
    () => dispatch(actions.initSearchBusinessName(queryParams.searchedKeyword)),
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
    if (queryParams.searchedType === "isyeri-turu") {
      onInitSearchByBusinessTypeName();
    } else if (queryParams.searchedType === "hizmet-tipi") {
      onInitSearchByServiceName();
    } else if (queryParams.searchedType === "isyeri-adi") {
      onInitSearchByBusinessName();
    }
  }, [onInitSearchByBusinessTypeName]);

const getSelectedBusinessData = (businessId, employeeList) => {
  setSelectedBusinessId(businessId)
  setSelectedBusinessEmployeeList(employeeList)
}

  return (

  <Grid container direction="column">
      <Grid item>
    <TabBar
      businessTypes={businessTypesList}
      services={servicesList}
      businesses={businessList}
    />
  </Grid>
    <Grid container direction="row" justify="space-between">
      <Grid item md={4}>
        <Grid
          item
          container
          direction="column"
          spacing={1}
          style={{ marginLeft: "5px", marginTop: "5px" }}
        >


          {searchResultList &&
            searchResultList.map((business) => (
              <Grid item key={business._id}>
                  <BusinessCard
                    businessId={business._id}
                    businessName={business.businessName}
                    employees={business.employeeList}
                    address={business.address}
                    commentCount={25}
                    onClickHandler={getSelectedBusinessData}
                    star={4}
                  />
              </Grid>
            ))}
        </Grid>
      </Grid>

      <Grid item md={7}>
              { selectedBusinessId ?
                        <ResourceScheduler selectedBusinessId={selectedBusinessId} employeeList={selectedBusinessEmployeeList}/>
                        :
                        <Typography variant="h2" component="h2" style={{ marginTop:"40%" }}>Takvimini görmek istediğiniz işyerini seçin</Typography>
              }

      </Grid>
    </Grid>
  </Grid>
  );
};

export default withRouter(businessList);
