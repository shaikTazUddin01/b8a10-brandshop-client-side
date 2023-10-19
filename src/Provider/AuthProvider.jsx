import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../fireBase/fireBase.config';

export const AuthContext = createContext(null)

const googleAuthProvider=new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    // const [loader,setLoader]=useState(true)

    const handleRegister = (email, pass) => {
        // setLoader(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const handleLogin = (email, password) => {
        // setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

const googleSignIn=()=>{
    return signInWithPopup(auth,googleAuthProvider)
}

const handlesignOut=()=>{
    return signOut(auth)
}
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            //    setLoader(false)
        })
        return () => {
            unSubscribe();
        }

    }, [])
    console.log(user);
    const AuthInFo = {
        handleRegister,
        handleLogin,
        googleSignIn,
        user,
        handlesignOut
        // loader
    }
    // console.log(user)
    return (
        <AuthContext.Provider value={AuthInFo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;