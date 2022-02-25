import React from 'react';
import { SpotifyAuth } from 'react-spotify-auth';
import classes from './SpotifyForm.module.css';
import { useState } from 'react';
import Cookies from 'js-cookie';


const SpotifyForm = () => {

  const [token, setToken] = useState(Cookies.get("spotifyAuthToken"));

  return (
    <>
    <div className={classes.spotify}>
        <SpotifyAuth
        redirectUri='http://localhost:3000/callback' 
        clientID='873a1e9f2d19454187e8ccb070460d24'
        btnClassName={classes.btn}
        scopes={['user-read-currently-playing']}
        /> 
    </div>
    <h2>You are using: {token}</h2>
    </>

  )
}

export default SpotifyForm