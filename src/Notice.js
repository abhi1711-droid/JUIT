import React,{useEffect,useState} from 'react'
import {db} from "./misc/firestore"
import {Link} from 'react-router-dom'
import wait from 'wait';

function Notice() {

  const [notice,setNotice] = useState()

  const fetchNotice = async()=>{
    const response = db.collection('Notice');
    const data = await response.get();
    setNotice([data.docs[0].data()])
    
  }

  const [load,setLoad] = useState(false);

  useEffect(async()=>{
     setLoad(false);
     fetchNotice();
     await wait(1000);
     setLoad(true);
   },[])

   if(load && notice.length > 0 && notice){
  return (
    <div>
    <Link className='anchor' to="/">Go Back</Link>
      <h3>Notice</h3>
      <br/>
      <br/>
      <div className='notice'>
      {notice[0].body}
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