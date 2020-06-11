import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import './main.scss'

const fullCalendar  = (props) => {


    return (
      <FullCalendar defaultView="timeGridDay" plugins={[ dayGridPlugin ]} {...props} />
    )


}

export default fullCalendar;