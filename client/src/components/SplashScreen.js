import { useState } from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Copyright from './Copyright'

export default function SplashScreen() {

    return (
        <div id="splash-screen">
            <Box sx={{
                        width: 900,
                        height: 300,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                <Typography component="div" variant="h2">
                    Welcome to<br />
                    Top 5 Lister
                </Typography>
                <Typography component="div" variant="subtitle1">
                    This site is aimed on collecting all the<br />
                    top 5 thing that ranked by people.
                </Typography>
                <button><Link to='/login/'>Login</Link></button>
                <button><Link to='/register/'>Create Account</Link></button>
                <button>Continue as Guest</button>
            </Box>
            <Copyright 
                sx={{ 
                    width: 900,
                    height: 1500
                }} />
        </div>
    )
}