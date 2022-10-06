import React,{useEffect,useState} from 'react'
import {db} from "./misc/firestore"
import {Link} from 'react-router-dom'
import wait from 'wait';

function Notice() {

  const [notice,setNotice] = useState()

  const fetchNotice = async()=>{
    const response = db.collection('Notice');
    const data = await response.get();
    data.docs.forEach(item=>{
      setNotice(notice => [...notice, item.data()]);
     })
    
  }

  const [load,setLoad] = useState(false);

  useEffect(async()=>{
    setNotice([])
     setLoad(false);
     fetchNotice();
     await wait(1000);
     setLoad(true);
   },[5])

   if(load && notice.length > 0 && notice){
  return (
    <div>
    <Link className='anchor' to="/home">Go Back</Link>
      <h3>Notice</h3>
      <br/>
      <br/>
      <div className='notice'>
      {notice.map((notice,key) => (
        <div key={key}>
          <br/>
          {notice.body}
          
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

export default Notice