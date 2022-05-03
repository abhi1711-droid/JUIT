import React,{useEffect,useState} from 'react'
import {db} from "./misc/firestore"
import wait from 'wait';
import { Link } from 'react-router-dom';

function Events() {

  const [events,setEvents] = useState([])

  const fetchEvents = async()=>{
    const response = db.collection('Events');
    const data = await response.get();
    data.docs.forEach(item=>{
      setEvents(events => [...events, item.data()]);
     })
  }

  const [load,setLoad] = useState(false);

  useEffect(async()=>{
    setEvents([])
     setLoad(false);
     fetchEvents();
     await wait(1000);
     console.log(events)
     setLoad(true);
   },[5])

   if(load && events.length > 0 && events){
  return (
    <div>
      <Link className='anchor' to="/">Go Back</Link>
      <h3>Events</h3>
      <br/>
      <br/>
      <div className='notice'>
      {events.map((event,key) => (
        <div key={key}>
          <br/>
          {event.announcement}
        </div>
      ))
      }
      </div>
    </div>
  )
   } else {
     return (
       <>
       loading...
       </>
     )
   }
}

export default Events