import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './/css/index.css';
import Register from './Register';
import reportWebVitals from './reportWebVitals';
import Homepage  from './Homepage';
import ChatPage from './ChatPage';
import Login from './Login';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path ="/" exact= {true} Component={Login} />
            <Route path ="/chat" exact= {true} Component={ChatPage} />
            <Route path ="/register" exact= {true} Component={Register} />
        </Routes>
    
    </BrowserRouter>
   

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
