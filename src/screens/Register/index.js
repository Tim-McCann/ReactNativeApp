import React from 'react';
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import RegisterComponent from '../../components/SignUp';
import envs from '../../config/env';
import register from '../../context/actions/auth/register';
import axios from '../../helpers/axiosInterceptor';
import {GlobalContext} from '../../context/Provider';
import axiosInstance from '../../helpers/axiosInterceptor';
import authInitialState from '../../context/initialStates/authInitialState';


const Register = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const {BACKEND_URL} = envs;
    const {
      authDispatch, 
      authState:{error, loading, data},
    } = useContext(GlobalContext);


    // console.log('BACKEND_URL :>>', BACKEND_URL);
    // console.log('__DEV__ :>>', __DEV__);
    // useEffect(() => {
    //   axiosInstance.post('/contacts').catch((err) => {
    //     console.log('err', err.response);
    //   });
    // }, []);

    const onChange = ({name, value}) => {
        setForm({...form, [name]: value});
    
        if (value !== '') {
          if (name === 'password') {
            if (value.length < 6) {
              setErrors((prev) => {
                return {...prev, [name]: 'This field needs min 6 characters'};
              });
            } else {
              setErrors((prev) => {
                return {...prev, [name]: null};
              });
            }
          } else {
            setErrors((prev) => {
              return {...prev, [name]: null};
            });
          }
        } else {
          setErrors((prev) => {
            return {...prev, [name]: 'This field is required'};
          });
        }
      };

    const onSubmit = () => {

        // console.log('form :>> ', form);

        if (!form.userName) {
            setErrors((prev) => {
              return {...prev, userName: 'Please add a username'};
            });
          }
          if (!form.firstName) {
            setErrors((prev) => {
              return {...prev, firstName: 'Please add a  first name'};
            });
          }
          if (!form.lastName) {
            setErrors((prev) => {
              return {...prev, lastName: 'Please add a last name'};
            });
          }
          if (!form.email) {
            setErrors((prev) => {
              return {...prev, email: 'Please add a email'};
            });
          }
          if (!form.password) {
            setErrors((prev) => {
              return {...prev, password: 'Please add a password'};
            });
          }

          if(
            Object.values(form).length === 5 &&
            Object.values(form).every((item) => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item)
          ){
            register(form)(authDispatch);
            


          }
    };

    return (
      <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
    );
};

export default Register;