import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import { LOGIN } from '../../constants/routeNames';
import styles from './styles';



const RegisterComponent = ({onSubmit, onChange, form, errors, error, loading, }) => {

    const {navigate}= useNavigation();

    return(
        <Container>

            <Image height={70} width={70} source={require('../../assets/images/logo.png')} style={styles.logoImage}/>
            
            <View>
                <Text style={styles.title}>
                    Welcome to the app
                </Text>
                <Text style={styles.subtitle}>
                    Create a free account    
                </Text>
                <View style={styles.form}>

                {error.error && <Text>{error.error}</Text>}
                
                    <Input
                    label="First Name"
                    iconPosition="right"
                    placeholder="Enter first name"
                    onChangeText={(value) => {
                        onChange({name: 'firstName', value});
                      }}
                      error={errors.firstName || error?.firstName?.[0]}
                    
                    />
                     <Input
                    label="Last Name"
                    iconPosition="right"
                    placeholder="Enter last name"
                    onChangeText={(value) =>{
                        onChange({name:"lastName", value})
                    }}
                    error={errors.lastName || error?.lastName?.[0]}
                    />
                     <Input
                    label="Email"
                    iconPosition="right"
                    placeholder="Enter Email"
                    onChangeText={(value) =>{
                        onChange({name:"email", value})
                    }}
                    error={errors.email || error?.email?.[0]}
                    />
                     <Input
                    label="Username"
                    iconPosition="right"
                    placeholder="Enter Username"
                    onChangeText={(value) =>{
                        onChange({name:"userName", value})
                    }}
                    error={errors.userName || error?.userName?.[0]}
                    />

                    <Input
                    label="Password"
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    icon={<Text>Show</Text>}
                    iconPosition="right"
                    onChangeText={(value) =>{
                        onChange({name:"password", value})
                    }}
                    error={errors.password || error?.password?.[0]}
                    />

                 </View>
                    {console.log('error', error)}
                <CustomButton 
                loading={loading}
                onPress={onSubmit} 
                disabled={loading}
                primary 
                title="Submit"
                 />

                <View style={styles.createSection}>
                    
                    <TouchableOpacity onPress={()=>{navigate(LOGIN)}}>
                        <Text style={styles.registerBtn}>Already have an account? Login here</Text>
                    </TouchableOpacity>
                </View>

            </View>
            
            

        </Container>
    )
}

export default RegisterComponent;