
import {Server} from 'socket.io'

import socket from 'socket.io-client'
import http from 'http';
import express from 'express';

import cors from 'cors';
// import { user } from '../src/Join/J';


const port = 4500 || process.env.port
const users = [{}];

    const app = express();

    app.use(cors());


    // app.get("/",(req,res,next)=>{
    //     res.send("its working")
    // })

    const server = http.createServer(app);

    const io = new Server(server);

    io.on('connection',(socket)=>{
        
        console.log(`User Connected`);

        // console.log(users)

        socket.on('joined',({user})=>{
            users[socket.id] = user;

            console.log(`${user} has joined`)

            socket.broadcast.emit('userJoined',({message:` ${user} has Joined`}))

            socket.emit('welcome',({User :`${user}`,message:`welcome to the chat`}))

        })
            socket.on('info',({user})=>{
                socket.on('disconnect',()=>{
                    users[socket.id] = user ;
                    const disconnectedUser = users[socket.id];
                    // console.log(`${disconnectedUser} has disconnected`)
                    // delete users[socket.id];
                    socket.broadcast.emit('leave',{user:`${disconnectedUser}`,message:`Has left`})
                    console.log("disconnected")
                });
            })
            socket.on('message',({message,id})=>{
                io.emit('sendMessage',{ user:users[id],message:message,id:id})
                // console.log(message)
            })


    });

    server.listen(port,()=>{
        console.log(`server is listening on : ${port}`);

    })
