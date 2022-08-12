import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import styles from "./Chats.module.css"
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import {ChatEngine} from "react-chat-engine";
import axios from "axios";
import {AuthContext} from "../contexts/AuthContextProvider";
const Chats = () => {
    const [loading,setLoading] = useState(true);
    const user = useContext(AuthContext);
    const history = useHistory();
    useEffect(() => {
        if(!user) {
            history.push("/");
            return;
    }
    axios.get("https://api.chatengine.io/users/me/" , {
        headers: {
        "Project-ID" : "7778d6bf-0d1b-4178-9de7-ab671fc8b555",
        "User-Name" : user.email,
        'User-Secret' : user.uid
        }
    })
    .then(() =>
    setLoading(false)
    )
    .catch(()=>{
        let formData = new FormData();
        formData.append("email",user.email);
        formData.append("username" , user.email);
        formData.append("secret" , user.uid);
        getFile(user.photoURL)
        .then(avatar =>{
            formData.append("avatar" , avatar ,avatar.name)
            axios.post("https://api.chatengine.io/users/" , formData , {
                headers:{
                    "private-key" : "36264b48-11cc-47c8-b12c-73e9a637f343"
                }
            })
        })
        .then(() => setLoading(false))
        .catch(error => console.log(error))
    })
    }, [user,history] )
const getFile = async (url) => {
    const response =  await fetch(url);
    const data = await response.blob();
    return new File([data] , "userPhoto.jpg" , {type:"image/jpeg"})

}
    const logoutHandler = async () => {
        await auth.signOut();
        history.push("/")
    }


if (!user || loading) return (
<div className={styles.Loading}><h2>Loading ...</h2></div>
)
else
  return (
    <div className={styles.container}>
        <Navbar LogoutHandler={logoutHandler} />
        <ChatEngine height="calc(100vh - 50px)" projectID="7778d6bf-0d1b-4178-9de7-ab671fc8b555" userName={user.email} userSecret={user.uid} />
    </div>
  )
}
export default Chats;