import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
    const isLoggedIn = true;
    return (
        <NavigationContainer>

            {isLoggedIn? <DrawerNavigator />: <AuthNavigator />}
          
        </NavigationContainer>
      );
};

export default AppNavContainer;