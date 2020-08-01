import {DRIVER_SET} from '../actions/Driver';

const initialState = {
  driver: null,
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case DRIVER_SET:
      console.log('driver set reducer ', action)
      return {
        ...state,
        driver: action.driver,
      };
    default:
      return state;
  }
};

export default reducer;
