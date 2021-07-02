import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import { REGISTER } from '../../constants/routeNames';
import styles from './styles';

const LoginComponent = () => {

    const {navigate}= useNavigation();

    return(
        <Container>

            <Image height={70} width={70} source={require('../../assets/images/logo.png')} style={styles.logoImage}/>
            
            <View>
                <Text style={styles.title}>
                    Welcome to the app
                </Text>
                <Text style={styles.subtitle}>
                    Please log in here
                </Text>
                <View style={styles.form}>
                    <Input
                    label="Username"
                    iconPosition="right"
                    placeholder="Enter Username"
                    // error={"This field is required"}
                    />

                    <Input
                    label="Password"
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    icon={<Text>Show</Text>}
                    iconPosition="right"
                    />

                 </View>

                <CustomButton primary title="Submit" />

                <View style={styles.createSection}>
                    
                    <TouchableOpacity onPress={()=>{navigate(REGISTER)}}>
                        <Text style={styles.registerBtn}>Don't have an account? Register here</Text>
                    </TouchableOpacity>
                </View>

            </View>
            
            

        </Container>
    )
}

export default LoginComponent;