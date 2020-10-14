import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen41142727Navigator from '../features/BlankScreen41142727/navigator';
import Maps142709Navigator from '../features/Maps142709/navigator';
import Add-Item142708Navigator from '../features/Add-Item142708/navigator';
import Maps142704Navigator from '../features/Maps142704/navigator';
import UserProfile142700Navigator from '../features/UserProfile142700/navigator';
import Maps141822Navigator from '../features/Maps141822/navigator';
import Add-Item141821Navigator from '../features/Add-Item141821/navigator';
import Maps141816Navigator from '../features/Maps141816/navigator';
import UserProfile141811Navigator from '../features/UserProfile141811/navigator';
import Maps141757Navigator from '../features/Maps141757/navigator';
import Add-Item141756Navigator from '../features/Add-Item141756/navigator';
import Maps141752Navigator from '../features/Maps141752/navigator';
import UserProfile141748Navigator from '../features/UserProfile141748/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen41142727: { screen: BlankScreen41142727Navigator },
Maps142709: { screen: Maps142709Navigator },
Add-Item142708: { screen: Add-Item142708Navigator },
Maps142704: { screen: Maps142704Navigator },
UserProfile142700: { screen: UserProfile142700Navigator },
Maps141822: { screen: Maps141822Navigator },
Add-Item141821: { screen: Add-Item141821Navigator },
Maps141816: { screen: Maps141816Navigator },
UserProfile141811: { screen: UserProfile141811Navigator },
Maps141757: { screen: Maps141757Navigator },
Add-Item141756: { screen: Add-Item141756Navigator },
Maps141752: { screen: Maps141752Navigator },
UserProfile141748: { screen: UserProfile141748Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
