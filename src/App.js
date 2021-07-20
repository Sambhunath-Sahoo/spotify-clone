import { useState ,useEffect } from 'react';
import './App.css';
import Login from './components/login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/player/Player';
import { useStateProviderValue } from './context/StateProvider';

// object to interact with spotify 
const spotify = new SpotifyWebApi;

function App() {
  const [{ user, token}, dispatch] = useStateProviderValue();
 
  useEffect( () => {

    const hash = getTokenFromUrl();
    window.location.hash = "";        // return the anchor part of a URL(text present before #(including))(look at the url to observe)
    const _token = hash.access_token;

    if (_token) {
      
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then( (user) => {
        // setting the user to the context
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });


      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });


    }
  }, []);

  // console.log("user🚀 ", user);
  // console.log("token🚀 ", token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login/>}
    </div>
  );
}

export default App;
