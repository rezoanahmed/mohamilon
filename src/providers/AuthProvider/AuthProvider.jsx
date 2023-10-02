// context api
/**
 * create context 
 * set provider with value
 * use the context in main file to use this in the entire application
 * access children in the auth provider component and use it in the middle of the provider
 **/


import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    // const authInfo = {name: "Habijabi nam"}

    // creating user using firebase
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        // return createUserWithEmailAndPassword(auth, email, password)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = { user, createUser, signInUser };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    // optionalNode: PropTypes.node,
    optionalNode: PropTypes.node

}

