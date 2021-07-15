import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Container from '../../components/common/Container';
import Icon from '../../components/common/Icon';

const HomePage = () => {
    const {setOptions, toggleDrawer} = useNavigation();

    React.useEffect(() => {
        setOptions({headerLeft: () => 
            <TouchableOpacity 
                onPress={() => {
                    toggleDrawer();
            }}>
                <Icon type="material" style={{padding: 15}} size={30} name="menu" />
            </TouchableOpacity>})
    }, []);
    return (
        <Container>
            <Text>Hi from homepage</Text>
        </Container>
    );
};

export default HomePage;