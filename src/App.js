import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>

        <SendMail />
      </div>
    </BrowserRouter>
  );
}

export default App;