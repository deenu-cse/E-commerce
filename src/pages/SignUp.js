import React, { useState } from 'react';
import '../App.css';
import TextField from '@mui/material/TextField';
import show from '../images/icons8-view-24.png';
import { Link, useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [cicon, setcicon] = useState(
        'https://img.icons8.com/?size=100&id=KvDeV3fVhwiM&format=png&color=000000'
    );
    const [formfield, setformfield] = useState({
        email: '',
        password: '',
        confirmpassword: '',
    });
    const [showloader, setshowloader] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setcicon(
            showPassword
                ? 'https://img.icons8.com/?size=100&id=KvDeV3fVhwiM&format=png&color=000000'
                : show
        );
    };

    const changefield = (e) => {
        const { name, value } = e.target;
        setformfield((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const sign = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setshowloader(true);

        const { email, password, confirmpassword } = formfield;

        if (!email || !password || !confirmpassword) {
            setErrorMessage('Please fill in all fields');
            setshowloader(false);
            return;
        }

        if (password !== confirmpassword) {
            setErrorMessage('Passwords do not match');
            setshowloader(false);
            return;
        }

        try {
            const response = await fetch('https://storx-backend.vercel.app/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            localStorage.setItem('userToken', data.userToken);
            localStorage.setItem('userToken', data.userToken);

            if (response.ok) {
                alert('Signup successful!');
                setformfield({
                    email: '',
                    password: '',
                    confirmpassword: '',
                });
                navigate('/')
            } else {
                setErrorMessage(data.message || 'Something went wrong');
            }
        } catch (error) {
            setErrorMessage('Failed to connect to the server');
        } finally {
            setshowloader(false);
        }
    };

    return (
        <>
            <div className="signcon">
                <div className="signcard">
                    <h3>SignUp</h3>
                    <br />
                    <br />
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={showloader}
                        className="loader"
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    <form onSubmit={sign}>
                        <TextField
                            id="Email"
                            name="email"
                            type="email"
                            label="Email"
                            variant="outlined"
                            value={formfield.email}
                            onChange={changefield}
                        />
                        <br />
                        <br />
                        <div style={{ position: 'relative' }}>
                            <TextField
                                id="Password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                label="Password"
                                variant="outlined"
                                value={formfield.password}
                                onChange={changefield}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '10px',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                <img src={cicon} alt="Show/Hide Password" />
                            </button>
                        </div>
                        <br />
                        <TextField
                            id="ConfirmPassword"
                            name="confirmpassword"
                            type="password"
                            label="Confirm Password"
                            variant="outlined"
                            value={formfield.confirmpassword}
                            onChange={changefield}
                        />
                        <br />
                        <br />
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        <br />
                        <div className="sbtn">
                            <button type="submit">SignUp</button>
                        </div>
                        <br />
                        <br />
                        <p>
                            Already have an account? Click{' '}
                            <Link to="/SignIn">SignIn</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}
