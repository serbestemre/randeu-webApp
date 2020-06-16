import React from "react";
import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";
import CommandButtonComponent from "./CommandButtonComponent";

const commandLayout = () => {
  const commitHandler = () => {
    console.log("commitHandler");

  };
  const getMessage = (mes) => {
      console.log("mes",mes);
      
  };

  const cancelHandler = (mes) => {
    console.log("cancel handler");
    
};

const deleteHandler = (mes) => {
  console.log("deleteHandler");
  
};



  return (
    <AppointmentForm.CommandLayout
      onCommitButtonClick={commitHandler}
      onDeleteButtonClick={deleteHandler}
      onCancelButtonClick={cancelHandler}
      getMessage={getMessage}
     
    >

    </AppointmentForm.CommandLayout>
  );
};

export default commandLayout;
