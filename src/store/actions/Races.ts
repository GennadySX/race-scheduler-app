import {httpGet} from '../../helpers/HTTP';
import {API} from '../../constants/API';
import {Dispatch} from "redux";

export const RACE_SET = 'RACE_SET';
export const RACE_GET_START = 'RACE_GET_START';
export const RACE_GET_END = 'RACE_GET_END';
export const RACE_GET_ERR = 'RACE_GET_ERR';

export const raceSetAction = (data: object | any) => ({
  type: RACE_SET,
  data,
});

export const raceGetStartAction = () => ({
  type: RACE_GET_START,
});

export const raceGetErrAction = () => ({
  type: RACE_GET_ERR,
});

export const raceGetSuccessAction = () => ({
  type: RACE_GET_END,
});

export const raceGet = () => {
  return (dispatch: Dispatch) => {
    dispatch(raceGetStartAction());
    httpGet(API.seasons())
      .then((res: any) => {
        dispatch(raceGetSuccessAction());
        dispatch(raceSetAction(res.MRData));
      })
      .catch(() => {
        setTimeout(dispatch(raceGet()), 3000);
      });
  };
};

export const racePager = (pageId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(raceGetStartAction());
    httpGet(API.seasons(API.seasonPager(pageId)))
      .then((res: any) => {
        if (res) {
          dispatch(raceSetAction(res.MRData));
        }
      })
      .catch((err: Error) => {
        console.log('err response', err)
        dispatch(raceGetErrAction());
        setTimeout(dispatch(racePager(pageId)), 3000);
      });
  };
};
