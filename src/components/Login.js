import React from 'react'
import firebase from "firebase/app"
import { auth } from '../firebase'
//Icons
import google from "../assets/google.svg"

//styles
import styles from "./Login.module.css"
import Footer from './Footer'


const Login = () => {
    return (
        <div>
            <div className={styles.loginPage}>
                <div className={styles.loginCard}>
                    <h2>Welcome to Hello Messenger !</h2>
                    <br />
                    <button onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}><img src={google} alt="google" /><divider />Sign in with Google</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;