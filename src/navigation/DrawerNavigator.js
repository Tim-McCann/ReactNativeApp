import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routeNames';
import Container from '../components/common/Container';
import { Image, SafeAreaView, View } from 'react-native';
import SideMenu from './SideMenu';
import {GlobalContext} from '../context/Provider';


const getDrawerContent = (navigation, authDispatch) =>{
    return <SideMenu navigation={navigation} authDispatch={authDispatch}/> 
}



const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    const {authDispatch} = React.useContext(GlobalContext);
    
    return (
        <Drawer.Navigator drawerType="front" drawerContent={({navigation}) => getDrawerContent(navigation, authDispatch)}>
            <Drawer.Screen name ={HOME_NAVIGATOR} component={HomeNavigator}></Drawer.Screen>
        </Drawer.Navigator>
      );
};

export default DrawerNavigator;