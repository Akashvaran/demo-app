import React, { useContext } from 'react' 
import { UserContext } from '../contaxt/UserContext'
import { Navigate } from 'react-router-dom'


const ProtectedRoute = ({children}) => {
    const {isLoggedIn}=useContext(UserContext)
    
    if(!isLoggedIn){
        return <Navigate to={"/login"}/>
    }
  return children
}

export default ProtectedRoute