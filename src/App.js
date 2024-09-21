import './App.css';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar';
import { Login } from './components/userauth/login/Login';
import { Signup } from './components/userauth/signup/Signup';
import { Dashboart } from './components/dashboart/Dashboart';
import { Productdetails } from './components/dashboart/Productdetails';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
                 
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboart/>}/>
          <Route path='/products/:id' element={<Productdetails />} />
        </Routes>      
      </BrowserRouter>
    </>
  );
}

export default App;
