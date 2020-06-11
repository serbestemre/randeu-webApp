import * as actionTypes from '../actions/actionTypes'
import { appointments } from '../../containers/ReactScheduler/appointments';

const LOCATIONS = ['Room 1', 'Room 2', 'Room 3'];


const schedulerInitialState = {
    data: appointments,
    currentDate: '2018-06-27',
    currentViewName: 'Week',
    currentFilter: '',
    locations: LOCATIONS,
  };
  
  const schedulerReducer = (state = schedulerInitialState, action) => {
    if (action.type === actionTypes.SCHEDULER_STATE_CHANGE_ACTION) {
      return {
        ...state,
        [action.payload.partialStateName]: action.payload.partialStateValue,
      };
    }
    return state;
  };

  export default schedulerReducer;
  