/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Employees from './src/BottomTab/Employees/Employees';
import Departments from './src/BottomTab/Departments';
import SplashScreen from './src/SplashScreen';
import Screen1 from './src/OnBoarding/Screen1';
import EmployeeProfile from './src/EmployeeProfile';
import TerminateEmployee from './src/TerminateEmployee';

AppRegistry.registerComponent(appName, () => TerminateEmployee);
