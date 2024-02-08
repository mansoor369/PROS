import React from 'react'
import {useState}  from 'react'
import './Join.css';
import {Link }  from 'react-router-dom'

 let user;
 
 const senduser = () =>{
  user = document.getElementById('joinInput').value;
  document.getElementById('joinInput').value = " ";
}



const J = () => {
  

  const [name,setname] = useState("");
    
    return (
      <div className='join-Page'>
          <div className='Join-container'>
          <h1> Chatties </h1> <br></br>
          <input id='joinInput' onChange={(e)=>setname(e.target.value)}   type='name'  placeholder='Enter Your name' /> <br></br>
          <Link  to="/chat"  onClick={(e)=>!name ? e.preventDefault() : null} > <button onClick={senduser}   className='joinbtn' >Log in</button> </Link>
          <br></br>
          </div>
      </div> 
    )
  }

  export default J;
  export {user,senduser}
