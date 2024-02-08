import React from "react";
import "./Join/Join.css"
import Chatt from "./chat/chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import J from "./Join/J.js";
// import socketIO from 'socket.io-client'
function App() {
    // const ENDPOINT = `http://localhost:4500/`;
    // const socket = socketIO(ENDPOINT,{transports : ["websocket"]});

    // socket.on('connect',()=>{

    // })
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route  path="/" element={<J />} />
        <Route path="/chat" element={<Chatt />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
