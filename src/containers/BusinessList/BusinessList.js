import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import BusinessCard from "../../components/Card/BusinessCard/BusinessCard";
import TabBar from "../../components/TabBar/TabBar";
import * as actions from "../../store/actions/index";
import { Grid, Typography } from "@material-ui/core";
import ReactScheduler from "../ReactScheduler/ReactScheduler";
import ResourceScheduler from "../ReactScheduler/ResourceScheduler";
import { withRouter } from "react-router-dom";

const businessList = (props) => {
  const queryParams = props.match.params;

  console.log("QUERY PARAMS:", queryParams);

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
      console.log(
        "İşyeri türüne göre aranıyor...",
        queryParams.searchedType +
          " " +
          queryParams.searchedKeyword +
          " iş yeri türü aranıyor"
      );
      onInitSearchByBusinessTypeName();
    } else if (queryParams.searchedType === "hizmet-tipi") {
      console.log(
        "hizmet-tipi türüne göre aranıyor...",
        queryParams.searchedType +
          " " +
          queryParams.searchedKeyword +
          " hizmet-tipi aranıyor"
      );

      onInitSearchByServiceName();
    } else if (queryParams.searchedType === "isyeri-adi") {
      console.log(
        "is-yeri-adina göre aranıyor...",
        queryParams.searchedType +
          " " +
          queryParams.searchedKeyword +
          "isyeri aranıyor"
      );
      onInitSearchByBusinessName();
    }
  }, [onInitSearchByBusinessTypeName]);

  return (
    <Grid container direction="row" justify="space-between">
      <Grid item md={4}>
        <Grid
          item
          container
          direction="column"
          spacing={1}
          style={{ marginLeft: "5px", marginTop: "5px" }}
        >
          <Grid item>
            <TabBar
              businessTypes={businessTypesList}
              services={servicesList}
              businesses={businessList}
            />
          </Grid>

          {searchResultList &&
            searchResultList.map((business) => (
              <Grid item>
                <BusinessCard
                  businessId={business._id}
                  businessName={business.businessName}
                  employees={business.employeeList}
                  address={business.address}
                  commentCount={Math.floor(Math.random() * (100 - 30) + 30)}
                  star={Math.random() * (5-3)+3}
          
                />
              </Grid>
            ))}
        </Grid>
      </Grid>

      <Grid item md={7}>
        {/* <ReactScheduler/> */}
        <ResourceScheduler />
      </Grid>
    </Grid>
  );
};

export default withRouter(businessList);
