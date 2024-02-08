import React, { useEffect, useState } from 'react'
import {user} from "../Join/J.js"
import  socketIO  from 'socket.io-client'
import "./chat.css"
import Message from '../message/message.js'
import ReactScrollToBottom from 'react-scroll-to-bottom';
const ENDPOINT =  'http://localhost:4500/';

let socket;
const Chatt = () => {
    
   const [id,setid] =  useState(" ");
   const [messages,setmessages] = useState([]);
   const send =  () =>{
    const message = document.getElementById("input").value ;

    socket.emit('message',{message,id})
    document.getElementById("input").value = " ";

   }



    // console.log({user})
    
    useEffect(()=>{
         socket = socketIO(ENDPOINT,{transports:["websocket"]})
        

        socket.on('connect',()=>{
            alert('connected')
            setid(socket.id )
            
        })

        socket.on('welcome',(data)=>{
            setmessages((m)=>{
                return ([...m,data])
            })  
            console.log(`${data.User} ${data.message}`)
            
    })
    
        console.log(socket )
        socket.emit('joined',{user})

        socket.emit('info',{user})
        
        
        socket.on('userJoined',(data)=>{
            setmessages((m)=>{
                return ([...m,data])
            })  

            console.log(` ${data.message}`)
        })

        socket.on('leave',(data)=>{
            setmessages((m)=>{
                return ([...m,data])
            })  
            console.log(`${data.user} ${data.message}`)
        })

        return()=>{
            
        }
       
    },[])

    console.log(messages)

    useEffect(()=>{
        socket.on('sendMessage',(data)=>{
            setmessages((m)=>{
                return ([...m,data])
            })  
            console.log(`${data.user} ${data.message} ${data.id}`)
        })
        return()=>{
            socket.off();
        }
    },[messages])
    return (
        <div className='chat-page'>
            <div className='chat-container'>
                <div className='header'>
                    <a href='/' id='close'>close</a>
                </div>

                <ReactScrollToBottom className='chat-box'>
                    {messages.map((items,i)=> <Message i = {i.id} user = {items.id === id ? '':items.user} message={items.message} classs={items.id === id ? 'right' : 'left'}   />)}
                </ReactScrollToBottom>

                <div className='inputbox'> 
                    <input id='input' onKeyPress={(event)=> event.key ==="Enter" ? send() : null} placeholder='Message'></input>
                <button id='sendbtn' onClick={send}>Send</button>
        
                </div>
   
            </div>

        </div>
    )
}

export default Chatt;