import * as React from 'react';
import Headline from './Headline';
import Phone from './Phone';
import Image from './Image';
import '../LoginPage/Login.css'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from 'react';
import { auth } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import db from '../../firebase';

function Login() {

    const [registerFName, setRegisterFName] = useState("");
    const [registerLName, setRegisterLName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user)
            //const db = firebase.firestore();
            collection("users").adddoc(user.user.uid);
            /*db.collection("users").doc(user.user.uid).add({
                name: registerFName + registerLName
            });*/
            
        }
        catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user)
        }
        catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        console.log(user);
        await signOut(auth);
        
    };

    /*return <div> 
            <Phone />
            <Headline />
            <Image />
    </div>;*/

    return (
        <div>
            {/*<Phone />*/}
            <h3>Register User</h3>

            <h4> First Name </h4>
            <input placeholder="first name" type="text"
                onChange={(event) => {
                    setRegisterFName(event.target.value);
                }}>
            </input>



            <h4> Last Name </h4> <input placeholder="last name" type="text"
                onChange={(event) => {
                    setRegisterLName(event.target.value);
                }}>



            </input><br></br>
            <h4>Email: </h4>
            <input placeholder="Email" type="email"
                onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }}>
            </input>




            <h4>Password</h4>
            <input placeholder="password" type="password"
                onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }}>
            </input> <br></br>




            <button onClick={register}> Create User</button>
            {/*<Headline />*/}
            {/*<Image />*/}



            <h3>Login User</h3>
            <h4>Email: </h4>
            <input placeholder="Email" type="email"
                onChange={(event) => {
                setLoginEmail(event.target.value);
                }}>
            </input>
            <h4>Password</h4>
            <input placeholder="password" type="password"
                onChange={(event) => {
                setLoginPassword(event.target.value);
                }}>
            </input>
            <br></br>
            <button onClick={login}> Login</button>

            <button onClick={logout}>Logout</button>

        </div>
    );
}
    export default Login;