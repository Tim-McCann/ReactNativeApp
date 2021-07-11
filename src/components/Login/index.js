import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container';
import Message from '../../components/common/Message';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import { REGISTER } from '../../constants/routeNames';
import styles from './styles';

const LoginComponent = ({error, onChange, justSignedUp, onSubmit, loading, form}) => {

    const {navigate}= useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);

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

                {justSignedUp && ( 
                    <Message 
                        onDismiss={() => {}}
                        success
                        message = "Account Created successfully"
                    />
                )}

                {error && !error.error &&
                   ( <Message 
                    retry 
                    
                    retryFn={()=>{
                        console.log('222', 222)
                    }} 
                    danger
                    message="Invalid credentials" 
                    onDismiss={() => {

                    }}
                    />)}

                {error?.error && (
                <Message 
                    retry 
                    danger
                    retryFn={onSubmit}
                    onDismiss
                    message={error?.error}
                />
                )}
                    <Input
                    label="Username"
                    iconPosition="right"
                    placeholder="Enter Username"
                    value={form.userName || null}
                    onChangeText={(value) => {
                        onChange({name: 'userName', value});
                      }}
                     
                    />

                    <Input
                    label="Password"
                    placeholder="Enter Password"
                    secureTextEntry={isSecureEntry}
                    icon={
                        <TouchableOpacity onPress={() => {
                            setIsSecureEntry((prev) =>!prev)
                        }}>
                            <Text>{isSecureEntry?"Show" : "Hide" }</Text>
                        </TouchableOpacity>}
                    iconPosition="right"
                    onChangeText={(value) => {
                        onChange({name: 'password', value});
                      }}
                    />

                 </View>

                <CustomButton disabled={loading} loading={loading} onPress={onSubmit} primary title="Submit" />

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