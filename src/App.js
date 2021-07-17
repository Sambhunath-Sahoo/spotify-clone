import { useState ,useEffect } from 'react';
import './App.css';
import Login from './components/login/Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState();

 
  useEffect( () => {

    const hash = getTokenFromUrl();
    window.location.hash = "";        // return the anchor part of a URL(text present before #(including))(look at the url to observe)
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
    
    console.log("taken is >> ", _token);
  }, []);

  return (
    <div className="app">
      {token ? <h1>I am Logged in</h1> : <Login/>}
    </div>
  );
}

export default App;
