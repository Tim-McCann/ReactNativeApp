import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Container from '../../components/common/Container';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const HomePage = () => {
    const {setOptions, toggleDrawer} = useNavigation();

    React.useEffect(() => {
        setOptions({headerLeft: () => 
            <TouchableOpacity 
                onPress={() => {
                    toggleDrawer();
            }}>
                <MaterialIcon style={{padding: 15}} size={30} name="menu" />
            </TouchableOpacity>})
    }, []);
    return (
        <Container>
            <Text>Hi from homepage</Text>
        </Container>
    );
};

export default HomePage;