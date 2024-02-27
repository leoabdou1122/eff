import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Main from './main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import GiftCards from './pages/GiftCards'
import Accounts from './pages/Accounts'
import SerialKeys from './pages/SerialKeys'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/accounts' element={<Accounts/>}/>
        <Route path='/giftcards' element={<GiftCards/>}/>
        <Route path='/serialkeys' element={<SerialKeys/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

