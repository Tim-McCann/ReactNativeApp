import { parseAsync } from '@babel/core';
import { useNavigation, useRoute } from '@react-navigation/core';
import React, {useContext} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import { GlobalContext } from '../../context/Provider';



const Login = () => {
    const [form, setForm] = useState({});
    const {params}= useRoute();
    const[justSignedUp, setJustSignedUp] = useState(false);

    useEffect(() => {
        if(params?.data){
            console.log('params', params);
            setJustSignedUp(true);
            setForm({...form, userName: params.data.username})
        }
    }, [params])

    const {
        authDispatch, 
        authState:{error, loading},
      } = useContext(GlobalContext);

    const onSubmit = () => {
        if (form.userName && form.password){
            loginUser(form)(authDispatch)
        }
    };

    const onChange = ({name, value}) => {
        setJustSignedUp(false);
        setForm({...form, [name]: value});
    };
    return (
        <LoginComponent 
        onSubmit={onSubmit}
        onChange={onChange}
        form={form}
        error={error}
        loading={loading}
        justSignedUp={justSignedUp}
        />
    );
};

export default Login;