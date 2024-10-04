/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Employees from './src/BottomTab/Employees';
import Departments from './src/BottomTab/Departments';

AppRegistry.registerComponent(appName, () => Departments);
