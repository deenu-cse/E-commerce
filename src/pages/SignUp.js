import React from 'react'
import '../App.css'
import TextField from '@mui/material/TextField';
import show from '../images/icons8-view-24.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './firebase'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export default function SignUp() {

    const auth = getAuth(app);
    const [showPassword, setShowPassword] = useState(false);
    const [cicon, setcicon] = useState('https://img.icons8.com/?size=100&id=KvDeV3fVhwiM&format=png&color=000000')

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        if (showPassword) {
            setcicon('https://img.icons8.com/?size=100&id=KvDeV3fVhwiM&format=png&color=000000');
        } else {
            setcicon(show);
        }
    };
    const [formfield, setformfield] = useState({
        email: "",
        password: "",
        confirmpassword: ""
    })

    const sign = () => {
        setshowloader(true)
        createUserWithEmailAndPassword(auth, formfield.email, formfield.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setshowloader(false)
                setformfield({
                    email: '',
                    password: '',
                    confirmpassword: ''
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }

    const changefield = (e) => {
        const name = e.target.name
        const value = e.target.value

        setformfield(() => ({
            ...formfield,
            [name]: value
        }))
    }


    const [showloader, setshowloader] = useState(false)

    return (
        <>
            <div className='signcon'>
                <div className='signcard'>
                    <h3>SignUp</h3>
                    <br /><br />
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={showloader}
                        className='loader'
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    <form>
                        <TextField id="Email" name='email' type='email' label="Email" variant="outlined" onChange={changefield} />
                        <br /><br />
                        <TextField id="Email" name='password' type={showPassword ? 'text' : 'password'} label="Password" onChange={changefield} />
                        <button className='icon' type="button" onClick={togglePasswordVisibility}>
                            <img src={cicon} alt="Show/Hide Password" />
                        </button>
                        <br /><br />
                        <TextField id="Email" name='confirmpassword' type='password' label="Confirm Password" onChange={changefield} />
                        <br /><br /><br />
                        <div className='sbtn'>
                            <button onClick={sign}>SignUp</button>
                        </div>
                        <br />
                        <br />
                        <p>Allready have an account click <Link to={'/SignIn'}>SignIn</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}
