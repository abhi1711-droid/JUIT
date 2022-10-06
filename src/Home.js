import React from 'react'
import { GoogleLogout } from 'react-google-login';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'


function Home() {

  const name = localStorage.getItem('userName');
  let log = localStorage.getItem('Authenticated');

  const clientId = "260794338811-kstoa8tdaaa7mek7j7ifjoctseo9v8p8.apps.googleusercontent.com";


  let history = useHistory();

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    localStorage.setItem('Authenticated',false);
    localStorage.setItem('userName','');
    localStorage.setItem('userPhotu','');
    history.push('./signin')
};

  
  return (
    <>
      <div className='main_home'>
       <span><h2>{name}</h2>
       <div className='log'>
       { log ?
              <GoogleLogout
                  clientId={clientId}
                  buttonText="Sign Out"
                  onLogoutSuccess={onSignoutSuccess}
              >
              </GoogleLogout> : null
          }
          </div>
       </span> 
        <img src={require('./main.png')} />
      </div>
      
      <div className='btn'>
     
          <div className='but'>
              <Link to="/teachers" className='grid-item'><img src={require('./images/teachers.png')}/></Link>
              <Link to="/messmenu"  className='grid-item'><img src={require('./images/mess.png')}/></Link>
              <Link to="/notice"  className='grid-item'><img src={require('./images/notice.png')}/></Link>
              <Link to="/events"  className='grid-item'><img src={require('./images/events.png')}/></Link>
          </div>
      
      </div>
      
    </>
  )
        
}

export default Home