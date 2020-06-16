import React, {useEffect, useCallback} from "react";
import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";

const commandComponentBotton = (props) => {
const {commitHandler, cancelHandler, deleteHandler} = props;

  const getMessage = (msg) => {
      console.log("getMESSAGE ?> ", msg)
  };

  useEffect(() => {
      console.log("COMMAND BUTTON CALLED")
  },[])
  return (
    <AppointmentForm.CommandButton
        id={"saveButton"}
      onExecute={commitHandler}
      getMessage={getMessage}
    >
     


    </AppointmentForm.CommandButton>
  );
};

export default commandComponentBotton;
