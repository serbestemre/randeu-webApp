import * as actionTypes from './actionTypes';


export const createSchedulerAction = (partialStateName, partialStateValue) => ({
    type: actionTypes.SCHEDULER_STATE_CHANGE_ACTION,
    payload: {
      partialStateName,
      partialStateValue,
    },
  });

export default createSchedulerAction;
