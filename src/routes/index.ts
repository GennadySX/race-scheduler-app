import HomeScreen from '../screens/Home';
import DriverScreen from '../screens/Driver';

export const Routes = [
  {
    name: 'Home',
    title: 'Гонки и расписание',
    component: HomeScreen,
  },
  {
    name: 'DriverInfo',
    title: 'Гонщик',
    component: DriverScreen,
  },
];
