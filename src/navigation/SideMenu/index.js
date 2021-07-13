import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import Container from '../../components/common/Container';
import { SETTINGS } from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';



const SideMenu = ({navigation, authDispatch}) => {

    const handleLogout = () => {

        navigation.toggleDrawer();
        Alert.alert("Logout", "Are you sure you want to logout?", [
            {
                text: "Cancel",
                onPress:() => {},
            },
            {
                text: "OK",
                onPress:() => {
                logoutUser()(authDispatch);
                }
            },
        ])
    };

    const menuItems = [
        {icon:<IonIcon name="md-settings-sharp" size={20}></IonIcon>,
         name:"Settings", 
         onPress: () => {
            navigation.navigate(SETTINGS);
        }},
        {icon:<MaterialIcon name="logout" size={21}></MaterialIcon>, 
         name:"Logout",
         onPress: handleLogout
        },
    ];

    return(
        <SafeAreaView>
            <Container>
    
                <Image 
                    height={70} 
                    width={70} 
                    source={require('../../assets/images/logo.png')} 
                    style={styles.logoImage}
                />

                <View style={{paddingHorizontal: 70}}>
                    {menuItems.map(({name, icon, onPress}) => 
                    <TouchableOpacity onPress={onPress} key={name} style={styles.item}>

                        {icon}
                        <Text style={styles.itemText}>
                            {name}
                        </Text>

                    </TouchableOpacity>)}
                </View>
    
            </Container>
        </SafeAreaView>
    );
}

export default SideMenu;