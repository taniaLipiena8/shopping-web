import { Navigate } from 'react-router-dom';
import React from 'react'

const PrivateRoute = ({ children }) => {
    const username = localStorage.getItem('username')
    if (!username) {
        return <Navigate to='/login' />
    } else{
        return (
            children
        )
    }
    
}

export default PrivateRoute