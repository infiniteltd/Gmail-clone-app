import React, { useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useSelector, useDispatch } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase';



function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(login({
          displayName: authUser.displayName,
          email: authUser.email,
          photoUrl: authUser.photoURL,
        }));
      }
    });
  }, [dispatch]);


  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />

            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;