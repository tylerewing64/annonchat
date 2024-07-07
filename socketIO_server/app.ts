import express, { Request, Response, NextFunction } from 'express';
import { Server } from 'socket.io';
import http from 'http';
import cors from 'cors';

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

io.on('connection', (socket) => {
  console.log('a user connected');

  // Handle custom events
  socket.on('message', (msg) => {
    console.log('message: ' + msg);
    io.emit('message', msg); // Broadcast the message to all clients
  });

  socket.on('typing', (typing) => { 
    console.log('user typing..');
  })
  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
