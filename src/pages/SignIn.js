import React, { useState } from 'react';
import '../App.css';
import TextField from '@mui/material/TextField';
import show from '../images/icons8-view-24.png';
import { Link, useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { app } from './firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";


export default function SignIn() {

    const navigate = useNavigate()

    const [showloader, setshowloader] = useState(false)
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
        password: ""
    })

    const signin = () => {
        signInWithEmailAndPassword(auth, formfield.email, formfield.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setshowloader(false)
                setformfield({
                    email: '',
                    password: '',
                })
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
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


    return (
        <>
            <div className='signcon'>
                <div className='signcard'>
                    <h3>SignIn</h3>
                    <br /><br />
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={showloader}
                        className='loader'
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    <form>
                        <TextField id="Email" type='email' label="Email" variant="outlined" onChange={changefield} />
                        <br /><br />
                        <TextField id="Email" type={showPassword ? 'text' : 'password'} label="Password" variant="outlined" onChange={changefield} />
                        <button className='icon' type="button" onClick={togglePasswordVisibility}>
                            <img src={cicon} alt="Show/Hide Password" />
                        </button>
                        <br /><br /><br />
                        <div className='sbtn'>
                            <button onClick={signin}>SignIn</button>
                        </div>
                        <br />
                        <span>Or</span>
                        <hr />
                        <div className='conti'>
                            <img src='https://global.discourse-cdn.com/webflow1/original/4X/b/4/a/b4ae7d5e642592b35a28096e615f7ee282def076.png' />
                        </div>
                        <br />
                        <p>Not have an account click <Link to={'/SignUp'}>SignUp</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}
