import React, {  useState, useEffect } from "react";
import BusinessList from '../../containers/BusinessList/BusinessList'
import { withRouter } from "react-router-dom";

const appointmentSearch = (props) => {
  const [queryParams, setQueryParams] = useState(props.match.params && props.match.params);

  useEffect(() => {
    console.log("APPOINTMENT SEARCH RENDERED")
  },[])

  useEffect(() => {
      console.log("****PROPS****", props);
      
    setQueryParams(props.match.params)
  }, [props.match.params.searchedType, props.match.params.searchedKeyword ])

    return (
        <BusinessList queryParams={queryParams}/>
    )
}

export default withRouter(appointmentSearch);