import React, { createContext, useReducer } from 'react';
import authInitialState from './initialStates/authInitialState';
import contactsInitalState from './initialStates/contactsInitalState';
import auth from './reducers/auth';
import contacts from './reducers/contacts';

 export const GlobalContext = createContext({});


const GlobalProvider= ({children}) => {

    const [authState, authDispatch]= useReducer(auth, authInitialState)
    const [contactsState, contactsDispatch]= useReducer(contacts, contactsInitalState)



    return (
        <GlobalContext.Provider 
        value={{authState, contactsState, authDispatch, contactsDispatch}}
        >{children}
        </GlobalContext.Provider>
        
    );
};

export default GlobalProvider;