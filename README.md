# annonchat
Anonymous end to end encrypted chat application hosted using tor hidden web services. 
Annonchat always users to chat with eachother over a secured annoymous network without having to worry about data privacy concerns. 
Key Features: 

-Messages are temporarily stored in the database
-Account registration requires no personal information
-Conversations/chats are automatically deleted after 3 days of inactiveness 
-End to end client encrypted chat messages.
-User data hashed before being stored into the database


Use cases/ User stories: 

User Case A001:
login with @name (store as a primary key in database)

User case A002: 
To register user must provide a UNIQUE username and password.
Encrypted key sent through first time account registration - this key is used to resolve forgotten username/ password issue

Hashing to encode user login info

Use case A003:
chat disappears after 3 days of inactiveness both clients need to produce msgs to keep chat active

Use case A004:
Users can save chat details (like snap other users are notified) 

Use case A005:
auto deletes after a user has opened the message

Use case A006: 
To start chat you click start new chat - prompts user with popup to enter the unique user identifier then a new chat window is opened

Use case A007:
To send message user enters information in input field and client sends encrypted message to api/backend server servers receieve the mesage through https request  and stores it in the database.

Use case A008: 
To receive message user opens chat window. Client request recent messages pertaining to the open chat from api/backend. Api/backend queries database for recent messages pertaining to chat. database returns the chats and is sent to client where the client decrypts the chat.


System Design: 
Restful API on backend using node version - v18.14.1
Socket.IO for websocket protocol request.
React.js for front end client side.
MySql for database storage.
