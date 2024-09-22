import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Login } from './components/userauth/login/Login';
import { Signup } from './components/userauth/signup/Signup';
import { Dashboart } from './components/dashboart/Dashboart';
import { Productdetails } from './components/dashboart/Productdetails';
import { useContext } from 'react';
import { UserContext } from './contaxt/UserContext';

function App() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path='/login' element={isLoggedIn ? <Navigate to='/dashboard' /> : <Login />} />
          <Route path='/' element={<Signup />} />
          
          
          <Route path='/dashboard' element={isLoggedIn ? <Dashboart /> : <Navigate to='/login' />} />
          <Route path='/products/:id' element={isLoggedIn ? <Productdetails /> : <Navigate to='/login' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
