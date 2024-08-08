import express, { Request, Response, NextFunction } from 'express';
import { Server } from 'socket.io';
import http from 'http';
import cors from 'cors';
import {extractJwtPayload} from './middleware/decryptJWT'

const app = express();
const port = 4000;

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Adjust this to your React app's URL
  methods: ['GET', 'POST']
};

app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Adjust this to your React app's URL
    methods: ["GET", "POST"]
  }
});


const USER_ID_SOCKET_ID_MAP = new Map();

io.on('connection', (socket) => {

 
  socket.on('connection', (data) =>{ 
    //Extract the JWT TO get username from payload then place it in a map relative to the socket id
    const payloadObj = extractJwtPayload(data);
    USER_ID_SOCKET_ID_MAP.set(payloadObj.username, socket.id);
    USER_ID_SOCKET_ID_MAP.set(socket.id, payloadObj.username);
   
  })
  // Send msg to receipeint using their socket id
  socket.on('message', (msg, receipient) => {
    console.log('message: ' + msg + ' ' +  receipient + ' ' + USER_ID_SOCKET_ID_MAP.get(socket.id) + " " + USER_ID_SOCKET_ID_MAP.get(receipient));
    const receiver = USER_ID_SOCKET_ID_MAP.get(receipient); //Get receiver socket ID;
    const sender = USER_ID_SOCKET_ID_MAP.get(socket.id) //Get sender username
    socket.to(receiver).emit('receiveMessage', msg, sender); // Send to receiver socket id and send the sender's username
    //Create code to send message to restful api to store message in database
  });

  socket.on('typing', (typing) => { 
    console.log('user typing..');
  })
  // Handle disconnection
  socket.on('disconnect', () => {
    
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
