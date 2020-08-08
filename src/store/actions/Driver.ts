import {httpGet} from '../../helpers/HTTP';
import {API} from '../../constants/API';
import {Dispatch} from 'redux';

export const DRIVER_SET = 'DRIVER_SET';
export const DRIVER_ERR = 'DRIVER_ERR';

export const driverAction = (driver: any) => ({
  type: DRIVER_SET,
  driver,
});

export const driverErrAction = () => ({
  type: DRIVER_ERR,
});

export const driverGet = (driverId: string) => {
  return (dispatch: Dispatch) => {
    httpGet(API.driver(driverId))
      .then((res: any) => dispatch(driverAction(res.MRData.DriverTable.Drivers[0])))
      .catch((err: Error) => {
        console.log('err response', err);
        dispatch(driverErrAction());
        setTimeout(dispatch(driverGet(driverId)), 3000);
      });
  };
};
