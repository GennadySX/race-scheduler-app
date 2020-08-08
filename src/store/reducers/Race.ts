import {
  RACE_GET_START,
  RACE_SET,
  RACE_GET_END,
  RACE_GET_ERR,
} from '../actions/Races';

const initialState = {
  races: [],
  max: 0,
  current: 1,
  loading: false,
  err: false,
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case RACE_SET:
      //console.log('race set reducer ', action)
      const {offset, RaceTable, total} = action.data;
      return {
        ...state,
        races: RaceTable.Races,
        max: total / 10,
        current: offset && offset > 10 ? offset / 10 : 1,
        loading: false,
        err: false,
      };
    case RACE_GET_START:
      return {
        ...state,
        loading: true,
        err: false,
      };
    case RACE_GET_END:
      return {
        ...state,
        loading: false,
        err: false,
      };
    case RACE_GET_ERR:
      return {
        ...state,
        loading: false,
        err: true,
      };
    default:
      return state;
  }
};

export default reducer;
