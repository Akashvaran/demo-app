import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Login } from './components/userauth/login/Login';
import { Signup } from './components/userauth/signup/Signup';
import { Dashboart } from './components/dashboart/Dashboart';
import { Productdetails } from './components/dashboart/Productdetails';
import { UserProvider } from './contaxt/UserContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {


  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>

            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Signup />} />


            <Route path='/dashboard' element={
              <ProtectedRoute>
                <Dashboart />
              </ProtectedRoute>
            } />
            <Route path='/users/:id' element={
              <ProtectedRoute>
                <Productdetails />
              </ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
