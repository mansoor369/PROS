import React from 'react'
import "./message.css"
const Message = ({user,classs,message,i}) => {
    if(user){
        return (
            <div className={`messageBox ${classs}`}>{`${user} : ${message}`}</div>
          )
    }
    else{
        return (
            <div className={`messageBox ${classs}`}>{`you : ${message}`}</div>
          )
    }
  
}

export default Message