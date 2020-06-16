import React from 'react';
import {
    AppointmentForm,
  } from "@devexpress/dx-react-scheduler-material-ui";

const appLaylout = () => {

    const onValueChange = () => {

    }

    return (
       <AppointmentForm.DateEditor readOnly onValueChange={onValueChange} />
    )
}

export default appLaylout;