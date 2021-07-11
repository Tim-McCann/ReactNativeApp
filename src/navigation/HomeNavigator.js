import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CONTACT_DETAIL, HOME_PAGE, CREATE_CONTACT, SETTINGS } from '../constants/routeNames';
import ContactDetail from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';
import { Text } from 'react-native';
import HomePage from '../screens/HomePage';


const HomeStack = createStackNavigator();


const HomeNavigator = () => {
    return (
        <HomeStack.Navigator initialRouteName={HOME_PAGE}>
            <HomeStack.Screen name ={HOME_PAGE} component={HomePage} ></HomeStack.Screen>
            <HomeStack.Screen name ={CONTACT_DETAIL} component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name ={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name ={SETTINGS} component={Settings}></HomeStack.Screen>

        </HomeStack.Navigator>
      );
};

export default HomeNavigator;