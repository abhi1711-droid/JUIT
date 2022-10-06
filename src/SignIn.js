import React,{useState,useEffect} from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import './styles/sign.css'

const Login= () => {

  const clientId = "260794338811-kstoa8tdaaa7mek7j7ifjoctseo9v8p8.apps.googleusercontent.com";

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  let history = useHistory();

  const onLoginSuccess = (res) => {
      console.log('Login Success:', res.profileObj);
      setShowloginButton(false);
      setShowlogoutButton(true);
      localStorage.setItem('Authenticated',true);
      localStorage.setItem('userName',res.profileObj.givenName);
      localStorage.setItem('userPhotu',res.profileObj.imageUrl);
      history.push('/home')
  };

  const onLoginFailure = (res) => {
      console.log('Login Failed:', res);
      localStorage.setItem('Authenticated',false);
  };

  const onSignoutSuccess = () => {
      alert("You have been logged out successfully");
      console.clear();
      setShowloginButton(true);
      setShowlogoutButton(false);
      localStorage.setItem('Authenticated',true);
      localStorage.setItem('userName','');
      localStorage.setItem('userPhotu','');
  };

  return (
      <div>
        <div className='logo'>
          <img src = {require ('./images/logo.png')} />
        </div>

        <div className='logopg'>
          <img src = {require ('./images/logpg.png')} />
        </div>

        <div className='login'>
          { showloginButton ?
              <GoogleLogin
                  clientId={clientId}
                  buttonText="Sign In"
                  onSuccess={onLoginSuccess}
                  onFailure={onLoginFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
              /> : null}
        </div>
          { showlogoutButton ?
              <GoogleLogout
                  clientId={clientId}
                  buttonText="Sign Out"
                  onLogoutSuccess={onSignoutSuccess}
              >
              </GoogleLogout> : null
          }
      </div>
  );
 };

export default Login;
