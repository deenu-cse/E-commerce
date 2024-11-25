import React, { useState } from 'react';
import '../App.css';
import TextField from '@mui/material/TextField';
import show from '../images/icons8-view-24.png';
import { Link, useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function SignIn() {
    const navigate = useNavigate();
    const [showloader, setshowloader] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [cicon, setcicon] = useState('https://img.icons8.com/?size=100&id=KvDeV3fVhwiM&format=png&color=000000');

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
    });

    const signin = async (e) => {
        e.preventDefault();
        setshowloader(true);

        try {
            const response = await fetch('https://storx-backend.vercel.app/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formfield),
            });

            const data = await response.json();
            setshowloader(false);

            if (response.ok) {
                console.log("Sign-in successful:", data);
                localStorage.setItem('token', data.token);
                navigate('/dashboard');
            } else {
                console.error("Sign-in failed:", data.message);
                alert(data.message || 'Failed to sign in');
            }
        } catch (error) {
            setshowloader(false);
            console.error("Error during sign-in:", error);
            alert('Error connecting to the server.');
        }
    };

    const changefield = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setformfield((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

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
                    <form onSubmit={signin}>
                        <TextField
                            id="Email"
                            name="email"
                            type="email"
                            label="Email"
                            variant="outlined"
                            onChange={changefield}
                            value={formfield.email}
                            required
                        />
                        <br /><br />
                        <TextField
                            id="Password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
                            variant="outlined"
                            onChange={changefield}
                            value={formfield.password}
                            required
                        />
                        <button className='icon' type="button" onClick={togglePasswordVisibility}>
                            <img src={cicon} alt="Show/Hide Password" />
                        </button>
                        <br /><br /><br />
                        <div className='sbtn'>
                            <button type="submit">SignIn</button>
                        </div>
                        <br />
                        <span>Or</span>
                        <hr />
                        <div className='conti'>
                            <img src='https://global.discourse-cdn.com/webflow1/original/4X/b/4/a/b4ae7d5e642592b35a28096e615f7ee282def076.png' alt="Continue with Google" />
                        </div>
                        <br />
                        <p>Not have an account? Click <Link to={'/SignUp'}>SignUp</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}
