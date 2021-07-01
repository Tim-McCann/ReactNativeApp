import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { LOGIN, REGISTER } from '../constants/routeNames';
import Register from '../screens/Register';
import Login from '../screens/Login';


const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name ={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name ={REGISTER} component={Register}></AuthStack.Screen>
        </AuthStack.Navigator>
      );
};

export default AuthNavigator;