import {DRIVER_ERR, DRIVER_SET} from '../actions/Driver';

const initialState = {
  driver: null,
  err: false
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case DRIVER_SET:
      //console.log('driver set reducer ', action)
      return {
        ...state,
        driver: action.driver,
        err: false,
      };
    case DRIVER_ERR:
      return {
        ...state,
        driver: null,
        err: true,
      };
    default:
      return state;
  }
};

export default reducer;
